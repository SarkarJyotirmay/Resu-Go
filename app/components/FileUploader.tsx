import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/lib/utils";

interface FileUploaderProps {
  file: File | null;
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ file, onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect],
  );

  const maxFileSize = 20 * 1024 * 1024;

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: maxFileSize,
    });

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <div className="space-y-4 cursor-pointer">
          {file ? (
            <div className="uploader-selected-file">
              <div className="flex justify-center items-center text-center w-full">
                <img
                  src="/images/pdf.png"
                  alt="pdf image"
                  className="size-10"
                />
                <div>
                  <p className="text-medium text-gray-700 font-medium truncate">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>

              <button
                className="p-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onFileSelect?.(null);
                }}
              >
                <img
                  src="/icons/cross.svg"
                  alt="cross icon"
                  className="h-4 w-4"
                />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto w-16 h-16 flex justify-center items-center">
                <img src="/icons/info.svg" className="size-20" alt="upload" />
              </div>
              <p className="text-lg text-gray-500 ">
                <span className="font-semibold">Click to upload</span> or darg
                and drop
              </p>
              <p className="text-lg text-gray-500 ">
                PDF (max {formatSize(maxFileSize)})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
