import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPreviewProps {
  title: string;
  content: string;
  imageUrl: string;
}

export default function BlogPreview({ title, content, imageUrl }: BlogPreviewProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardContent>
    </Card>
  );
}