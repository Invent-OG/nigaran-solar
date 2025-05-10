"use client";

import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit2, Trash2 } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";
import BlogForm from "./BlogForm";
import { useBlogs, useDeleteBlog } from "@/lib/queries/blogs";
import { toast } from "sonner"; // ✅ Replaced useToast with Sonner
import { DeleteConfirmation } from "./DeleteConfirmation";

interface BlogTableProps {
  searchTerm: string;
}

const ITEMS_PER_PAGE = 10;

export default function BlogTable({ searchTerm }: BlogTableProps) {
  const [selectedBlogs, setSelectedBlogs] = useState<string[]>([]);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useBlogs();
  const deleteBlogMutation = useDeleteBlog();

  const blogs = data?.blogs || [];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSelectAll = () => {
    if (selectedBlogs.length === paginatedBlogs.length) {
      setSelectedBlogs([]);
    } else {
      setSelectedBlogs(paginatedBlogs.map((blog) => blog.id));
    }
  };

  const handleSelect = (blogId: string) => {
    if (selectedBlogs.includes(blogId)) {
      setSelectedBlogs(selectedBlogs.filter((id) => id !== blogId));
    } else {
      setSelectedBlogs([...selectedBlogs, blogId]);
    }
  };

  const handleDelete = async (blogId: string) => {
    try {
      await deleteBlogMutation.mutateAsync(blogId);
      toast.success("Blog deleted successfully");
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  const handleDeleteSelected = async () => {
    if (
      confirm(
        `Are you sure you want to delete ${selectedBlogs.length} blog post(s)?`
      )
    ) {
      try {
        for (const id of selectedBlogs) {
          await deleteBlogMutation.mutateAsync(id);
        }
        toast.success("Selected blogs deleted successfully");
        setSelectedBlogs([]);
      } catch (error) {
        toast.error("Failed to delete some blogs");
      }
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedBlogs([]);
  };

  if (editingBlog) {
    return (
      <BlogForm
        onClose={() => setEditingBlog(null)}
        initialData={editingBlog}
      />
    );
  }

  if (isLoading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  return (
    <div>
      {selectedBlogs.length > 0 && (
        <div className="mb-4">
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteSelected}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Selected ({selectedBlogs.length})
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedBlogs.length === paginatedBlogs.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedBlogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedBlogs.includes(blog.id)}
                    onCheckedChange={() => handleSelect(blog.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="relative h-16 w-24">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingBlog(blog)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <DeleteConfirmation
                    onDelete={() => handleDelete(blog.id)}
                    title="Delete Blog Post"
                    description="Are you sure you want to delete this blog post? This action cannot be undone."
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
