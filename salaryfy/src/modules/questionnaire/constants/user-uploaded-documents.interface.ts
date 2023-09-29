import { FILE_UPLOAD_TYPES } from "./file-upload.enum"

export interface DocumentTypeResponse {
    documentId: number
    documentLink: string
    documentType: FILE_UPLOAD_TYPES
    userId: number
}