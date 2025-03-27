const Contact = () =>{
    return (
        <div> 
            <h2 className="font-bold text-2xl p-4 m-4">This is our contact Page</h2>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="phone number"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button className=" bg-green-500 text-white font-bold rounded-lg p-2 m-2">Submit</button>
            </form>

        </div>
    )
}

export default Contact;