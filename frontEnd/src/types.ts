import { LegacyRef } from "react";


export interface imageState {
  preview: string,
  raw: File | null
}

export type inputRefState = LegacyRef<HTMLInputElement>;