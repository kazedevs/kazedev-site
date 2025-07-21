"use client";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function SolanaDonation() {
  const solanaAddress = "6uJG8idxZSHURTMUXHj1tSZH8HqiZcsy3GDfhhozzYRw";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(solanaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 rounded-lg border bg-card p-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Image 
            src="https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png" 
            alt="Solana" 
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <h3 className="text-lg font-semibold">Support with SOL</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          If you&apos;d like to support my work, you can send SOL to:
        </p>
        <div className="flex items-center justify-between rounded-md bg-muted/50 p-2">
          <code className="text-sm break-all">{solanaAddress}</code>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="h-8 w-8"
            title="Copy address"
          >
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        {copied && (
          <p className="text-xs text-green-500">Address copied to clipboard!</p>
        )}
      </div>
    </div>
  );
}
