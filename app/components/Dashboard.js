import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };

    const totalUsers = 84800;
    const pageViewsData = formatNumber(totalUsers);
    const passionate = totalUsers * 0.88;
    const noPassionate = totalUsers * 0.12;
    const returnWeekly = totalUsers * 0.49;
    const notReturnWeekly = totalUsers * 0.51;

    // Data for User Passion for Tech Products (Doughnut Chart)
    const passionData = {
        labels: ['Apaixonado', 'Não Apaixonado'],
        datasets: [
            {
                label: 'Paixão dos usuários',
                data: [passionate, noPassionate], // 88% passionate, 12% not passionate
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    };

    // Data for Visitor Return Rate (Doughnut Chart)
    const returnRateData = {
        labels: ['Retorna Semanalmente', 'Não Retorna Semanalmente'],
        datasets: [
            {
                label: 'Taxa Retorno Visitantes',
                data: [returnWeekly, notReturnWeekly], // 49% return weekly, 51% not return weekly
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => formatNumber(value), // Format y-axis labels
                },
            },
        },
    };

    return (
        <>
            <div className="text-center">
                <h1>Analítica</h1>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <h3>Visualizações por mês</h3>
                        <p style={{ fontSize: '8em' }}>{pageViewsData}</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <h3>Amor por tecnologia</h3>
                        <Doughnut data={passionData} />
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mb-4">
                        <h3>Retorno dos visitantes</h3>
                        <Doughnut data={returnRateData} />
                    </Col>
                </Row>
            </div>
            <p>
                Esses dados nos ajudam a entender melhor o comportamento e as preferências dos nossos visitantes, 
                permitindo que possamos melhorar continuamente a experiência do usuário.
                As métricas apresentadas incluem o número total de visualizações de página, 
                a porcentagem de usuários apaixonados por tecnologia 
                e a taxa de retorno semanal dos visitantes. 
                Esses insights nos fornecem valiosas informações sobre 
                o engajamento e a fidelidade do nosso público, sempre com o objetivo de trazer os melhores conteúdos.
            </p>
        </>
    );
};

export default Dashboard;
