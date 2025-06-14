
import React from 'react';
import { Image } from 'lucide-react';

interface TryOnPreviewProps {
  originalPhoto: string | null;
  tryOnResult: string | null;
  isProcessing: boolean;
}

const TryOnPreview = ({ originalPhoto, tryOnResult, isProcessing }: TryOnPreviewProps) => {
  if (!originalPhoto) {
    return (
      <div className="h-96 flex items-center justify-center bg-slate-50 rounded-xl border-2 border-dashed border-slate-300">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
            <Image className="text-slate-400" size={24} />
          </div>
          <p className="text-slate-500">Upload a photo to see preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Before/After Toggle */}
      {tryOnResult && (
        <div className="flex justify-center">
          <div className="bg-slate-100 rounded-lg p-1 flex">
            <button className="px-4 py-2 rounded-md bg-white shadow-sm text-sm font-medium">
              Before/After
            </button>
          </div>
        </div>
      )}

      {/* Image Preview */}
      <div className="relative">
        {isProcessing ? (
          <div className="h-96 flex items-center justify-center bg-slate-100 rounded-xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600 font-medium">Processing your try-on...</p>
              <p className="text-sm text-slate-500">This may take a few moments</p>
            </div>
          </div>
        ) : tryOnResult ? (
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <img
                src={tryOnResult}
                alt="Try-on result"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Virtual Try-On Result
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img
              src={originalPhoto}
              alt="Original"
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
            <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              Original Photo
            </div>
          </div>
        )}
      </div>

      {/* Processing Info */}
      {isProcessing && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">AI Processing Steps:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Detecting body pose and segmentation</li>
            <li>• Aligning clothing item to body shape</li>
            <li>• Applying realistic lighting and shadows</li>
            <li>• Generating final composite image</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TryOnPreview;
