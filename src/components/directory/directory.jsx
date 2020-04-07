import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'denims',
                  imageUrl: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  id: 1,
                  linkUrl: 'denims',
                  size: 'small',
      
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://images.pexels.com/photos/2939337/pexels-photo-2939337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  id: 2,
                  linkUrl: 'shop/jackets',
                  size: 'small',
            
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  id: 3,
                  linkUrl: 'shop/sneakers',
                  size: 'small',
                  
                },
                {
                  title: 'women\'s',
                  imageUrl: 'https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
          
                  
                },
                {
                  title: 'men\'s',
                  imageUrl: 'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                      <MenuItem key={section.id} section={section}  />
                    ))
            
                }
            </div>
        )
    }
}

export default Directory;