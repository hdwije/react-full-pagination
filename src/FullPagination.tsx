export function FullPagination() {
  const pageClasses =
    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-gray-700 font-light text-white shadow-xl/30';

  return (
    <div className="grid grid-cols-12 gap-2 p-2">
      <div className="col-span-7 flex items-center justify-between border p-2">
        <div className={pageClasses}>{'<<'}</div>
        <div className={pageClasses}>{'<'}</div>
        <div className={pageClasses}>...</div>
        <div className={pageClasses}>10</div>
        <div className={pageClasses}>11</div>
        <div className={pageClasses}>12</div>
        <div className={pageClasses}>13</div>
        <div className={pageClasses}>14</div>
        <div className={pageClasses}>...</div>
        <div className={pageClasses}>{'>'}</div>
        <div className={pageClasses}>{'>>'}</div>
      </div>
      <div className="col-span-2 grid grid-cols-12 items-center border p-2">
        <div className="col-span-7">Show</div>
        <select className="col-span-5 rounded-md border border-gray-400 p-2 font-light text-gray-800">
          <option value="10">10</option>
          <option value="10">20</option>
          <option value="10">50</option>
          <option value="10">100</option>
        </select>
      </div>
      <div className="col-span-3 grid grid-cols-12 items-center border p-2">
        <div className="col-span-7">Go to page</div>
        <input
          type="number"
          className="col-span-5 rounded-md border border-gray-400 p-2 font-light text-gray-800"
        />
      </div>
    </div>
  );
}
