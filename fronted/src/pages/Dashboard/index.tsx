import Datatable from 'components/datatable';
import Donutchart from 'components/donutchart';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Barchart from 'components/barchart';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
                        <Barchart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Todas as vendas</h5>
                        <Donutchart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas</h2>
                </div>
                <Datatable />

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
