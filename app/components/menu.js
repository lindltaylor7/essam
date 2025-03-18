import Link from "next/link";

export default function Menu({permissions = []}){
    return (
        <div className="flex flex-row space-x-4">
            {permissions.map(permission =>{
                return(
                    <Link href="/register" key={permission._id}>
                        <p className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">{permission.name}</p>
                    </Link>
                )
            })}
        </div>
    );
}