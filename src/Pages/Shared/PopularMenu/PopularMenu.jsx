import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItemCard from './MenuItemCard';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className='mb-8'>
            <SectionTitle
            heading={'From our Menu'}
            subheading={'Popular Items'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    popular.map(item => <MenuItemCard
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4'>Order now</button>
        </section>
    );
};

export default PopularMenu;