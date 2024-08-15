export const TextField = ({ name, type = 'text', isRequired, placeholder }) => {
    return (
        <div className="">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{placeholder}{isRequired && <span className="text-red-500 pr-4"> *</span>}</label>
            <input placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name={name} type={type} label={placeholder} />
        </div>
    )
}