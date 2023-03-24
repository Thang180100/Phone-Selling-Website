import { Link } from 'react-router-dom';


function ProductItem(props) {
    const { product, index } = props;

    const onDelete = () => {
        props.onDelete(product.id)
    }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.price}$</td>
            <td>{product.name}</td>
            <td>
                <span className={product.status ? ' badge badge-warning' : ' badge badge-danger'}>
                    {product.status ? 'Còn Hàng' : 'Hết Hàng'}
                </span>
            </td>
            <td>
                <Link className='btn btn-success' to={`/addorupdate/${product.id}`} >
                    Sửa
                </Link>
                <button type='button' className='btn btn-danger ml-5' onClick={() => { onDelete(product.id) }}>
                    Xoá
                </button>
            </td>
        </tr>
    );

}



export default ProductItem;
