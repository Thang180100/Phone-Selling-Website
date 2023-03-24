import { useState, useEffect } from "react";
import callApi from "../../utils/apiCaller";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { actAddProductsRequest, actUpdateProductsRequest } from "../../actions/index";
import { connect } from "react-redux";


function AddProduct(props) {
    const navigate = useNavigate();
    let { id } = useParams();

    const [txtName, setTxtName] = useState('')
    const [txtPrice, setTxtPrice] = useState('')
    const [chkbStatus, setChkbStatus] = useState('')

    useEffect(() => {
        if (id) {
            callApi(`ProductsList/${id}`, 'GET', null).then(res => {
                var data = res.data
                setTxtName(data.name)
                setTxtPrice(data.price)
                setChkbStatus(data.status)
            })
        }
    }, [])


    const onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type == 'checkbox' ? target.checked : target.value

        if (name == 'chkbStatus') {
            setChkbStatus(value)
        } else if (name == 'txtName') {
            setTxtName(value)
        } else {
            setTxtPrice(value)
        }
    }

    const onSave = (e) => {
        e.preventDefault()
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            props.onUpdateProduct(product)
            navigate('/')
        } else {
            props.onAddProduct(product)
            navigate('/')
        }
    }


    return (
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
            <form onSubmit={onSave}>
                <div className='form-group'>
                    <label>Tên sản phẩm</label>
                    <input type='text' className='form-control' name='txtName' value={txtName} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Giá</label>
                    <input type='number' className='form-control' name='txtPrice' value={txtPrice} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label>Trạng thái : </label>
                </div>
                <div className='checkbox'>
                    <label>
                        <input
                            type='checkbox'
                            name='chkbStatus'
                            value={chkbStatus}
                            onChange={onChange}
                            checked={chkbStatus}
                        />
                        Còn hàng
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
                <Link to='/' className="btn btn-danger ml-5">Back</Link>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductsRequest(product))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductsRequest(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);
