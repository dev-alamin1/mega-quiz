import { createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Root from '../components/Root';
import Quizs from '../components/Quizs';
import Error from '../components/Error';
import Statistics from '../components/Statistics';

export const router = createBrowserRouter([
    {
      path:'/', element:<Root/>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
       errorElement:<Error/>,
      children:[
        {
          path:'/', element:<Home></Home>,
        },

        {
          path:'/home', element:<Home></Home>,
        },

        {
          path:'/quiz', element:<Home></Home>,
        },

         {
          path:'/quiz/:id', 
          loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
         },
         element:<Quizs/>

        },

        {
            //data statistics 
            path: '/statistics',
            element:<Statistics/>
        },
       
        {
          path:'/blogs',element:<div>Blogs</div>
        }

      ],
    }
  ]);