import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import ArtProductsItems from '../components/ArtProductsItems'
import { ArtContext } from '../context/ArtContext'

const BuyArt = () => {

    const {artProducts} = useContext(ArtContext)

  return (
    <div className='mb-10'>
        <div className='pb-10'>
            <div className='text-center py-10 text-3xl '>
                <Title text1={"ALL"} text2={"ARTS"} />
            </div>

            <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-y-[5%]'>
            {
                artProducts.map((item, index)=>(
                    <ArtProductsItems key={index}  id={item._id}  name={item.name} description={item.description}  price={item.price}  image={item.image} />
                ))
            }

            </div>
        </div>


        <p className='sm:text-xl text-sm text-gray-600 pt-[5%] sm:pt-[40%]'>Opt Art is an online art gallery to buy art & sell art, where you'll discover an incredible collection of paintings, photography, drawings & illustrations, digital art & AI, mixed media works, original art and art prints. From new artists to renowned artists, you'll experience a huge gallery with an extensive array of paintings & artworks for sale, while also being easy to browse, search, and purchase. Explore art spanning various periods and styles, including modern art, contemporary art, pop art, abstract art, and much more.

Opt Art's art collection gives you access to an eclectic mix of artworks & artists from around the world, including figurative art, abstract art, contemporary masterpieces, impressionist art, art from the masters, realism art, abstract expressionism, modern art, and much more. The subjects depicted span the spectrum, from landscapes to animals to people to flowers to food & beverage art, everyday life art, historical art, holiday art, classical art, political & religious art, fantasy art, humor, abstracts, sports art, childrens art, and many more art subjects. These captivating artworks hail from galleries & artists all over the globe, offering a rich tapestry of styles, subjects, and artistic types.

At Opt Art, we feature a diverse selection of artists and art galleries, so you can find your unique style throughout the online store. The offerings encompass a wide range of art forms, such as fine art prints, original art, canvas prints, abstract paintings, oil paintings, giclées, limited editions, photography, drawings & illustrations, digital art & AI art, mixed media art, metal art, and more. Whether you're enhancing your home, or business, or professional workspace, you'll finally find the wall art that you've been searching for.

In addition, it's easy to frame & mat most any artwork you find on Opt Art, using the powerful online frameshop. Featuring high-quality frames & mats with unparalleled custom framing workmanship and attention to detail, you're sure to be thrilled with your new art.

Whether you're an experienced art collector or embarking on your first art purchase, Opt Art has an expansive art collection to ensure you find the art that's just perfect for you.

Let's go art shopping!</p>


    </div>
  )
}

export default BuyArt
