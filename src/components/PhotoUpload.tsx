
import React, { useCallback, useState } from 'react';
import { Upload, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoUploadProps {
  onPhotoUpload: (photoUrl: string) => void;
}

const PhotoUpload = ({ onPhotoUpload }: PhotoUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        onPhotoUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-slate-300 hover:border-slate-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {uploadedImage ? (
          <div className="space-y-4">
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-green-600 font-medium">Photo uploaded successfully!</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
              <Upload className="text-slate-400" size={24} />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-700">Drop your photo here</p>
              <p className="text-sm text-slate-500">or click to browse</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-slate-500 space-y-1">
        <p>• Use a front-facing photo with good lighting</p>
        <p>• Ensure your full torso is visible</p>
        <p>• JPG, PNG formats supported</p>
      </div>
    </div>
  );
};

export default PhotoUpload;
