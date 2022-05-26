import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='p-2 m-2 mt-20 md:mt-5 md:m-10 md:p-10'>
      <Header
        category='Página'
        title='Pedidos'
      />
      <GridComponent
        id='gridComp'
        dataSource={ordersData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        allowSorting
        
      >
        <ColumnsDirective>
          {
            ordersGrid.map((item, index) => (
              <ColumnDirective
                key={index}
                {...item}
              />
            ))
          }
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>

  )
}

export default Orders