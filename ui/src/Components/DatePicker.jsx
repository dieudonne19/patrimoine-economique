

export function DatePicker({value, onChange, onClick}) {


    return <div>
        <input
            type="date"
            value={value}
            id="datePicker"
            onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={() => onClick()} >Valid</button>
    </div>
}