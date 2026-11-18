import React from 'react';
export type FileUploadStatus = 'default' | 'loading' | 'error' | 'uploaded';
export interface FileUploadProps {
    /** Controlled current file. Supplying a file renders the uploaded state. */
    file?: File | null;
    /** Uncontrolled initial file. */
    defaultFile?: File | null;
    /** Fires after an accepted replacement is selected or dropped. */
    onFileChange?: (file: File) => void;
    /** Fires after the user removes an uploaded file. */
    onRemove?: () => void;
    /** Fires when accept or maximum-size validation rejects a file. */
    onError?: (message: string, file: File) => void;
    /** Forces a visual state; omit it to derive from file, validation, and loading props. */
    status?: FileUploadStatus;
    /** Shows the Figma loading treatment and blocks interactions. @default false */
    loading?: boolean;
    /** Blocks file selection, drag/drop, and removal. @default false */
    disabled?: boolean;
    /** Native file-input accept string. @default '.bmp,.gif,.ico,.jpg,.jpeg,.png' */
    accept?: string;
    /** Maximum accepted file size in bytes. @default 5242880 (5 MB) */
    maxSize?: number;
    /** Text below the dropzone; defaults to the Figma restrictions line. */
    restrictions?: React.ReactNode;
    /** Dropzone prompt. @default 'Drag and drop file here to upload.' */
    prompt?: string;
    /** Browse action label. @default 'Upload Image' */
    uploadLabel?: string;
    /** Replacement action label after a file is present. @default 'Update Image' */
    updateLabel?: string;
    /** Error-chip text. Defaults to the latest validation error. */
    errorMessage?: string;
    /** Image preview URL shown for an uploaded file. */
    previewUrl?: string;
    /** Accessible name for the dropzone. @default 'Image upload' */
    'aria-label'?: string;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FileUpload.d.ts.map