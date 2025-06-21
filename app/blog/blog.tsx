"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Clover as Government,
  Presentation as PresentationChart,
  Search,
  Calendar,
} from "lucide-react";
import { useBlogs } from "@/lib/queries/blogs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data, isLoading, error } = useBlogs(
    currentPage,
    itemsPerPage,
    searchTerm,
    selectedCategory || undefined
  );

  const blogs = data?.blogs || [];
  const totalPages = data?.totalPages || 1;

  const handleDateReset = () => {
    setSelectedDate(null);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  // Get unique categories for filter
  const categories = [...new Set(blogs.map(blog => blog.category))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:pb-52 pb-[80%] bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Solar Energy Insights & Updates
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Stay informed with the latest news, trends, and expert advice
              about solar energy and sustainable living.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Solar Basics",
                description: "Learn the fundamentals of solar energy systems",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Installation Tips",
                description: "Expert guidance for optimal solar setup",
              },
              {
                icon: <Government className="w-8 h-8" />,
                title: "Government Schemes",
                description: "Latest updates on solar policies and subsidies",
              },
              {
                icon: <PresentationChart className="w-8 h-8" />,
                title: "Case Studies",
                description: "Real success stories from our customers",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center transition-shadow rounded-lg cursor-pointer bg-card hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4 items-center w-full md:w-auto">
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Filter by date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <div className="p-2 flex justify-between items-center border-b">
                    <span className="text-sm font-medium">Select date</span>
                    {selectedDate && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleDateReset}
                      >
                        Reset
                      </Button>
                    )}
                  </div>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Blog Posts */}
          {isLoading ? (
            <div className="py-8 text-center">Loading blog posts...</div>
          ) : error ? (
            <div className="py-8 text-center text-red-500">
              Error loading blog posts
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden transition-shadow rounded-lg shadow-sm bg-card hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-primary">
                          {blog.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                      <p className="mb-4 text-muted-foreground">{blog.excerpt}</p>
                      <Link href={`/blog/${blog.id}`}>
                        <Button
                          variant="link"
                          className="h-auto p-0 font-medium text-primary"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}