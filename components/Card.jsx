const Card = ({icon}) => {
    const Icon = icon;
    return (
        <div className="bg-white p-8 border-2 border-pink-400 rounded-2xl shadow-xl hover:border-pink-500 hover:scale-110  transition-transform duration-500">
            <Icon className='text-neutral-600 text-5xl'/>
        </div>
    );

}
export default Card;
