import { useEffect, useState } from "react"

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/menu')
            .then(res => res.json())
            .then(items => {
                setMenu(items)
                setLoading(false)
            })
    }, [])
    return [menu, loading]
}

export default useMenu;