import Card from "../Card"
export default function ToDoList({data}){
    return <div>
        {data.map(item=><Card title={
            <>
                <input type="checkbox" checked={item.done}/>
                {item.name}
            </>
        }>
            {item.endDate}
        </Card>)}
    </div>
}