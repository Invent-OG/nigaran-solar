"use client";

import React from "react";
import DatePickerLib from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = "Select date",
}) => {
  return (
    <div className="relative w-full max-w-[200px]">
      <DatePickerLib
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        isClearable
      />
      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );
};
