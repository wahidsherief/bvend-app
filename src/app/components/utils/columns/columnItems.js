
export const Checkbox = ({ item }) => (
    <input
        className={item.style}
        type="checkbox"
        id="checkbox-1"
    />
)

export const Image = ({ item }) => (
    <img src={item.src} className={item.style} alt={item.alt} />

)

export const Text = ({ item }) => (
    <p className={item.style}>{item.text}</p>
)


export const Toggle = ({ item }) => (
    <span className={`status-btn ${item.is_active ? 'active-btn' : 'close-btn'} ${item.style}`}>
        {item.is_active ? 'Active' : 'Not Active'}
    </span>
)

export const Button = ({ item }) => (
    <button name={item.name} onClick={item.action} className={item.style}>
        <i className={item.icon.style}></i>
    </button>
)