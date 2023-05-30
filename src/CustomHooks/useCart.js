import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../component/Provider/AuthProvider'

export const useCart = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/carts?email=${email}`)
            return response.json();

        },
    })

    return [cart, refetch]


}