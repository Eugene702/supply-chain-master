const Failed = ({
    message
}: {
    message?: string
}) => {
    return <h1 className="text-xl font-bold">{ message ?? 'Ada kesalahan pada server!' }</h1>
}

export default Failed