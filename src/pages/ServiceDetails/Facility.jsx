const Facility = ({facility}) => {
    const {name, details} = facility;

    return (
        <div className="p-10 rounded-xl border-t border-rose-500 bg-gray-200">
            <h3 className="font-semibold text-xl">{name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default Facility;