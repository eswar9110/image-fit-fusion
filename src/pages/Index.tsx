
import React, { useState } from 'react';
import { Upload, Camera, Image, ArrowUp } from 'lucide-react';
import PhotoUpload from '../components/PhotoUpload';
import ClothingCatalog from '../components/ClothingCatalog';
import TryOnPreview from '../components/TryOnPreview';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tryOnResult, setTryOnResult] = useState<string | null>(null);

  const handlePhotoUpload = (photoUrl: string) => {
    setUploadedPhoto(photoUrl);
    setTryOnResult(null);
  };

  const handleClothingSelect = (clothing: any) => {
    setSelectedClothing(clothing);
  };

  const handleTryOn = async () => {
    if (!uploadedPhoto || !selectedClothing) return;
    
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      // In real implementation, this would call the backend API
      setTryOnResult('/placeholder.svg'); // Mock result
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 animate-fade-in">
            Virtual Try-On Studio
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Upload your photo and see how you look in different outfits with AI-powered virtual try-on technology
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Photo Upload Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Camera className="text-blue-600" size={24} />
                Upload Your Photo
              </h2>
              <PhotoUpload onPhotoUpload={handlePhotoUpload} />
            </div>

            {/* Try-On Button */}
            {uploadedPhoto && selectedClothing && (
              <Button 
                onClick={handleTryOn}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Try On Outfit
                    <ArrowUp className="rotate-45" size={20} />
                  </div>
                )}
              </Button>
            )}
          </div>

          {/* Clothing Catalog */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 h-fit">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Image className="text-purple-600" size={24} />
                Choose Clothing
              </h2>
              <ClothingCatalog onClothingSelect={handleClothingSelect} selectedClothing={selectedClothing} />
            </div>
          </div>

          {/* Try-On Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Preview
              </h2>
              <TryOnPreview 
                originalPhoto={uploadedPhoto}
                tryOnResult={tryOnResult}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Recommended Tech Stack</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Frontend</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vite</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Backend</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Python Flask</li>
                <li>• VITON-HD Model</li>
                <li>• OpenCV + PIL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2">Azure Hosting</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• App Service</li>
                <li>• Blob Storage</li>
                <li>• Container Instances</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
