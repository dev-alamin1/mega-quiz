import { createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Root from '../components/Root';
import Quizs from '../components/Quizs';

export const router = createBrowserRouter([
    {
      path:'/', element:<Root/>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
          path:'/about',element:<div>About</div>
        }

      ],
    }
  ]);