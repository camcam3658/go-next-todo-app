import { Outlet } from '@remix-run/react'
import { FC } from 'react'
import { ActionFunction, json } from '@remix-run/node'
import { createTodo } from '../../model/todo.server'

export const action: ActionFunction = async ({ request }: { request: Request }) => {
    const res = await createTodo(request);
    if (res) {
        console.log(res);
        return json({ message: 'success' }, { status: 201, headers: { Location: '/todo' } });
    } else {
        return json({ message: 'failure' }, { status: 500, headers: { Location: '/' } });
    }
}

const TodoLayout: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.flexColumn}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default TodoLayout