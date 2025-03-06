export const ParentComponent =()=>{
    return(
        <>
        <h1 className="bg-black-600">Component A</h1>
        <ChildComponent data = "React JS"/>
        </>
    )
}

const ChildComponent = (Props)=>{
    return(
        <>
        <h1>Hello, I am Component B</h1>
        <GrandChildComponent data = {Props.data}/>
        </>
    )
}

const GrandChildComponent = (Props)=>{
    return(
        <>
        <h1>Hello, I am Component c</h1>
        <GrandGrandChildComponent data = {Props.data}/>
        </>
    )
}

const GrandGrandChildComponent = (Props)=>{
    return(
        <>
        <h1 className="text-4xl">Hello, I hate {Props.data}</h1>
        </>
    )
}