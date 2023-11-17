import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const blocknumber = BigInt(42473706)

export async function asyncMap<T1, T2>(
  arr: T1[] | readonly T1[],
  func: (elem: T1) => Promise<T2>
): Promise<T2[]> {
  return Promise.all(arr.map(func))
}
