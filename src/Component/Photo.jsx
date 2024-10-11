import { useState } from "react";
import Uppy from "@uppy/core";
import { DashboardModal } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import GoogleDrive from "@uppy/google-drive";
import Dropbox from "@uppy/dropbox";
import OneDrive from "@uppy/onedrive";
import Url from "@uppy/url";
import Webcam from "@uppy/webcam";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const FileUploaderModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const uppy = new Uppy({
    restrictions: {
      maxNumberOfFiles: 10,
      allowedFileTypes: ["image/*", "video/*", ".pdf"],
    },
    autoProceed: false,
  });

  uppy.use(XHRUpload, {
    endpoint: `https://api.cloudinary.com/v1_1/dkgz29rh6/auto/upload`,
    formData: true,
    meta: {
      upload_preset: "eqdfpgoa",
    },
  });

  uppy.use(GoogleDrive, { companionUrl: "https://companion.uppy.io" });
  uppy.use(Dropbox, { companionUrl: "https://companion.uppy.io" });
  uppy.use(OneDrive, { companionUrl: "https://companion.uppy.io" });
  uppy.use(Url, { companionUrl: "https://companion.uppy.io" });
  uppy.use(Webcam);

  // useEffect(() => {
  //     return () => uppy.close(); // Clean up Uppy instance on component unmount
  // }, []);

  return (
    <div className="mt-6">
      {/* Photo Section */}
      <h2 className="text-lg font-bold mb-4">Photo</h2>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Please attach three pictures of yourself{" "}
          <span className="text-red-500">*</span>
        </label>
        <div
          className="flex justify-center border py-8 rounded-md hover:shadow-sm mt-2"
          onClick={() => setModalOpen(true)}
        >
          <button className="btn-upload text-center text-sm text-gray-400">
            Drop Files Here or <span className="text-blue-500">Browse</span>
          </button>
        </div>
      </div>

      {/* Textarea */}
      <DashboardModal
        uppy={uppy}
        open={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        proudlyDisplayPoweredByUppy={false}
        closeModalOnClickOutside={true}
        plugins={["GoogleDrive", "Dropbox", "OneDrive", "Url", "Webcam"]}
      />
      <hr className="mt-10"/>
    </div>
  );
};

export default FileUploaderModal;
