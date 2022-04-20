export const mapProductInfo = (product) => { 
    return {
      brand: product.brand || '-',
      model: product.model || '-',
      price: parseInt(product.price) || null,
      cpu: product.cpu || '-',
      ram: product.ram || '-',
      os: product.os || '-',
      displayResolution: product.displayResolution || '-',
      imgUrl: product.imgUrl || '',
      battery: product.battery || '-',
      primaryCamera: product.primaryCamera || '-',
      secondaryCamera: product.secondaryCmera || '-',
      dimentions: product.dimentions || '-',
      options: product.options || {},
      weight: parseInt(product.weight) || null
    }; 
 }