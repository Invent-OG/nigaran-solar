"use client";

import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "@/components/admin/AdminHeader";
import CareerForm from "@/components/admin/CareerForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Edit2, FileText, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Pagination } from "@/components/ui/pagination";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  useCareers, 
  useDeleteCareer, 
  useJobApplications, 
  useDeleteJobApplication,
  type Career,
  type JobApplication
} from "@/lib/queries/careers";
import { DeleteConfirmation } from "@/components/admin/DeleteConfirmation";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("listings");
  const [appCurrentPage, setAppCurrentPage] = useState(1);
  const [appItemsPerPage, setAppItemsPerPage] = useState(10);
  const [appSearchTerm, setAppSearchTerm] = useState("");
  const [appDebouncedSearch, setAppDebouncedSearch] = useState("");
  const [selectedAppIds, setSelectedAppIds] = useState<string[]>([]);
  
  const queryClient = useQueryClient();

  // Debounce search for careers
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Debounce search for applications
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppDebouncedSearch(appSearchTerm);
    }, 500);
    return () => clearTimeout(timeout);
  }, [appSearchTerm]);

  // Careers data
  const {
    data: careersData,
    isLoading: careersLoading,
    error: careersError,
  } = useCareers(currentPage, itemsPerPage, debouncedSearch);

  // Job applications data
  const {
    data: applicationsData,
    isLoading: applicationsLoading,
    error: applicationsError,
  } = useJobApplications(appCurrentPage, appItemsPerPage, appDebouncedSearch);

  // Mutations
  const deleteCareer = useMutation({
    mutationFn: useDeleteCareer().mutationFn,
    onSuccess: () => {
      toast.success("Career deleted");
      queryClient.invalidateQueries({ queryKey: ["careers"] });
      setSelectedIds([]);
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });

  const deleteApplication = useMutation({
    mutationFn: useDeleteJobApplication().mutationFn,
    onSuccess: () => {
      toast.success("Application deleted");
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
      setSelectedAppIds([]);
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });

  const selectedCareerData = useMemo(
    () => careersData?.careers.find((c) => c.id === selectedCareer) || null,
    [selectedCareer, careersData?.careers]
  );

  const handleDateReset = () => {
    setSelectedDate(null);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSelectedIds([]);
    setSelectedAppIds([]);
  };

  // Career selection handlers
  const handleSelectAllCareers = () => {
    if (careersData) {
      if (selectedIds.length === careersData.careers.length) {
        setSelectedIds([]);
      } else {
        setSelectedIds(careersData.careers.map(career => career.id));
      }
    }
  };

  const handleSelectCareer = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Application selection handlers
  const handleSelectAllApplications = () => {
    if (applicationsData) {
      if (selectedAppIds.length === applicationsData.applications.length) {
        setSelectedAppIds([]);
      } else {
        setSelectedAppIds(applicationsData.applications.map(app => app.id));
      }
    }
  };

  const handleSelectApplication = (id: string) => {
    if (selectedAppIds.includes(id)) {
      setSelectedAppIds(selectedAppIds.filter(item => item !== id));
    } else {
      setSelectedAppIds([...selectedAppIds, id]);
    }
  };

  // Bulk delete handlers
  const handleBulkDeleteCareers = async () => {
    try {
      for (const id of selectedIds) {
        await deleteCareer.mutateAsync(id);
      }
      toast.success(`${selectedIds.length} careers deleted`);
      setSelectedIds([]);
    } catch (error) {
      toast.error("Failed to delete some careers");
    }
  };

  const handleBulkDeleteApplications = async () => {
    try {
      for (const id of selectedAppIds) {
        await deleteApplication.mutateAsync(id);
      }
      toast.success(`${selectedAppIds.length} applications deleted`);
      setSelectedAppIds([]);
    } catch (error) {
      toast.error("Failed to delete some applications");
    }
  };

  // Export handlers
  const handleExportCareers = () => {
    if (!careersData) return;
    
    const csv = [
      ["Title", "Type", "Location", "Salary", "Created At"],
      ...careersData.careers.map((career) => [
        career.title,
        career.type,
        career.location,
        career.salary || "Not specified",
        new Date(career.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "careers.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("Careers exported successfully");
  };

  const handleExportApplications = () => {
    if (!applicationsData) return;
    
    const csv = [
      ["Name", "Email", "Phone", "Position", "Applied Date"],
      ...applicationsData.applications.map((app) => [
        app.name,
        app.email,
        app.phone,
        app.careerTitle || "Unknown Position",
        new Date(app.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "applications.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("Applications exported successfully");
  };

  if (selectedCareer) {
    return (
      <div>
        <AdminHeader title="Careers Management" />
        <CareerForm
          initialData={selectedCareerData!}
          onClose={() => setSelectedCareer(null)}
        />
      </div>
    );
  }

  if (careersLoading || applicationsLoading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (careersError || applicationsError) {
    return (
      <div className="p-6 text-center text-red-500">
        Error loading data. Please try again.
      </div>
    );
  }

  return (
    <div>
      <AdminHeader title="Careers Management" />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          <TabsTrigger value="listings">Job Listings</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="space-x-4 flex items-center">
                {selectedIds.length > 0 && (
                  <Button 
                    variant="destructive" 
                    onClick={handleBulkDeleteCareers}
                    disabled={deleteCareer.isPending}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Selected ({selectedIds.length})
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={handleExportCareers}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button onClick={() => setSelectedCareer("new")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Listing
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Checkbox
                        checked={
                          selectedIds.length === careersData?.careers.length &&
                          careersData?.careers.length > 0
                        }
                        onCheckedChange={handleSelectAllCareers}
                      />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead>Posted Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {careersData?.careers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        No careers found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    careersData?.careers.map((career) => (
                      <TableRow key={career.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedIds.includes(career.id)}
                            onCheckedChange={() => handleSelectCareer(career.id)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{career.title}</TableCell>
                        <TableCell>{career.type}</TableCell>
                        <TableCell>{career.location}</TableCell>
                        <TableCell>
                          {
                            applicationsData?.applications.filter(
                              (a) => a.careerId === career.id
                            ).length || 0
                          }
                        </TableCell>
                        <TableCell>
                          {new Date(career.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedCareer(career.id)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <DeleteConfirmation
                            onDelete={() => deleteCareer.mutate(career.id)}
                            title="Delete Career"
                            description="Are you sure you want to delete this career? This action cannot be undone."
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {careersData && careersData.totalPages > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {careersData.careers.length} of {careersData.totalCount} careers
                </div>
                <div className="flex items-center gap-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={careersData.totalPages}
                    onPageChange={setCurrentPage}
                  />
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value));
                      setCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[120px]">
                      {itemsPerPage} / page
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 10, 20, 50].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search applications..."
                  value={appSearchTerm}
                  onChange={(e) => setAppSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="space-x-4 flex items-center">
                {selectedAppIds.length > 0 && (
                  <Button 
                    variant="destructive" 
                    onClick={handleBulkDeleteApplications}
                    disabled={deleteApplication.isPending}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Selected ({selectedAppIds.length})
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={handleExportApplications}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Checkbox
                        checked={
                          selectedAppIds.length === applicationsData?.applications.length &&
                          applicationsData?.applications.length > 0
                        }
                        onCheckedChange={handleSelectAllApplications}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicationsData?.applications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6">
                        No applications found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    applicationsData?.applications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedAppIds.includes(application.id)}
                            onCheckedChange={() => handleSelectApplication(application.id)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {application.name}
                        </TableCell>
                        <TableCell>{application.email}</TableCell>
                        <TableCell>
                          {application.careerTitle || "Unknown Position"}
                        </TableCell>
                        <TableCell>
                          {new Date(application.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              window.open(application.resumeUrl, "_blank")
                            }
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <DeleteConfirmation
                            onDelete={() => deleteApplication.mutate(application.id)}
                            title="Delete Application"
                            description="Are you sure you want to delete this application? This action cannot be undone."
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {applicationsData && applicationsData.totalPages > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {applicationsData.applications.length} of {applicationsData.totalCount} applications
                </div>
                <div className="flex items-center gap-4">
                  <Pagination
                    currentPage={appCurrentPage}
                    totalPages={applicationsData.totalPages}
                    onPageChange={setAppCurrentPage}
                  />
                  <Select
                    value={appItemsPerPage.toString()}
                    onValueChange={(value) => {
                      setAppItemsPerPage(Number(value));
                      setAppCurrentPage(1);
                    }}
                  >
                    <SelectTrigger className="w-[120px]">
                      {appItemsPerPage} / page
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 10, 20, 50].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}