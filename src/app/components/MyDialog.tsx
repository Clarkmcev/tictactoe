import { useState } from 'react';
import { Dialog } from '@headlessui/react';

type MyDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MyDialog({ isOpen, setIsOpen }: MyDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
