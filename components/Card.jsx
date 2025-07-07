const Card = ({icon}) => {
    const Icon = icon;
    return (
        <div className="border-2 p-8 rounded-2xl shadow-xl border-pink-400 hover:border-pink-500 hover:scale-110 transition-transform duration-500">
            <Icon className='text-neutral-600 text-5xl'/>
        </div>
    );

}
export default Card;
