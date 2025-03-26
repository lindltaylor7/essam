import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu({ user }) {
  return (
    <div className="flex flex-row space-x-4">
      {user.permissions.map((permission) => {
        return (
          <Link href={"/" + permission.url} key={permission._id}>
            <p
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              {permission.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
