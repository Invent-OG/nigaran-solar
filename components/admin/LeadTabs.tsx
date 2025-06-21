"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useLeads, useDeleteLead } from "@/lib/queries/leads";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "../ui/skeleton";

export default function LeadTabs() {
  const { data, isLoading, error } = useLeads();
  const deleteMutation = useDeleteLead();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Lead deleted", {
        description: "The lead has been successfully deleted.",
      });
    } catch (error) {
      toast.error("Failed to delete lead", {
        description: "Please try again.",
      });
    }
  };

  const handleSelectAll = (leads: Array<{ id: string }>) => {
    const allIds = leads.map((lead) => lead.id);
    setSelectedIds((prev) => (prev.length === leads.length ? [] : allIds));
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = async () => {
    try {
      await Promise.all(
        selectedIds.map((id) => deleteMutation.mutateAsync(id))
      );
      toast.success("Selected leads deleted");
      setSelectedIds([]);
    } catch {
      toast.error("Failed to delete selected leads");
    }
  };

  if (isLoading) {
    return (
      <div className="rounded-md border overflow-hidden">
        <div className="p-4 border-b bg-muted">
          <Skeleton className="h-6 w-1/3" />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-4" />
              </th>
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-24" />
              </th>
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-32" />
              </th>
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-20" />
              </th>
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-20" />
              </th>
              <th className="p-4 text-left">
                <Skeleton className="h-4 w-24" />
              </th>
              <th className="p-4 text-right">
                <Skeleton className="h-4 w-16" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, idx) => (
              <tr key={idx} className="border-b">
                {[...Array(7)].map((__, tdIdx) => (
                  <td
                    key={tdIdx}
                    className={`p-4 ${tdIdx === 6 ? "text-right" : ""}`}
                  >
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading leads: {(error as Error).message}
      </div>
    );
  }

  const leads = data?.leads ?? [];

  const filterLeadsByType = (type: string) => {
    return leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt);
      const matchesType = lead.type === type;
      const matchesSearch =
        searchTerm === "" ||
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.whatsappNumber.includes(searchTerm) ||
        lead.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSelectedDate =
        !startDate || leadDate.toDateString() === startDate.toDateString();

      return matchesType && matchesSearch && matchesSelectedDate;
    });
  };

  const handleExport = (type: string) => {
    const leadsToExport = filterLeadsByType(type);
    const csv = [
      ["Name", "WhatsApp Number", "Electricity Bill", "City", "Date"],
      ...leadsToExport.map((lead) => [
        lead.name,
        lead.whatsappNumber,
        lead.electricityBill.toString(),
        lead.city,
        new Date(lead.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}-leads.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const LeadTable = ({ type }: { type: string }) => {
    // Sort leads by most recent first
    const filteredLeads = [...filterLeadsByType(type)].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
    const paginatedLeads = filteredLeads.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4  items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[200px] justify-start text-left font-normal"
                >
                  {startDate ? startDate.toLocaleDateString() : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  selected={startDate ?? undefined}
                  onSelect={setStartDate}
                  mode="single"
                  required={true}
                />
              </PopoverContent>
            </Popover>

            {selectedIds.length > 0 && (
              <Button variant="destructive" onClick={handleBulkDelete}>
                Delete Selected ({selectedIds.length})
              </Button>
            )}

            <Button variant="outline" onClick={() => handleExport(type)}>
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
                      selectedIds.length === paginatedLeads.length &&
                      paginatedLeads.length > 0
                    }
                    onCheckedChange={() => handleSelectAll(paginatedLeads)}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Bill Amount</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6">
                    No leads found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.includes(lead.id)}
                        onCheckedChange={() => handleSelectOne(lead.id)}
                      />
                    </TableCell>
                    <TableCell>{lead.name}</TableCell>
                    <TableCell>{lead.whatsappNumber}</TableCell>
                    <TableCell>₹{lead.electricityBill}</TableCell>
                    <TableCell>{lead.city}</TableCell>
                    <TableCell>
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <DeleteConfirmation
                        onDelete={() => handleDelete(lead.id)}
                        title="Delete Lead"
                        description="Are you sure you want to delete this lead? This action cannot be undone."
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(Number(value))}
            >
              <SelectTrigger className="w-[120px]">
                {itemsPerPage} / page
              </SelectTrigger>
              <SelectContent>
                {[5, 8, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    );
  };

  return (
    <Tabs defaultValue="residential" className="space-y-4">
      <TabsList>
        <TabsTrigger value="residential">Residential</TabsTrigger>
        <TabsTrigger value="housing_society">Housing Society</TabsTrigger>
        <TabsTrigger value="commercial">Commercial</TabsTrigger>
      </TabsList>

      <TabsContent value="residential">
        <LeadTable type="residential" />
      </TabsContent>
      <TabsContent value="housing_society">
        <LeadTable type="housing_society" />
      </TabsContent>
      <TabsContent value="commercial">
        <LeadTable type="commercial" />
      </TabsContent>
    </Tabs>
  );
}
