import React, { useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import ServiceModal from '../../components/ServiceModal';
import { servicesData } from '../../data/services';
import * as S from './styles';

const SchedulingPage = () => {
  const [selectedDay, setSelectedDay] = useState('SEG');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = servicesData.filter(service => service.day === selectedDay);
  
  const handleReserveClick = (service) => setSelectedService(service);
  const handleCloseModal = () => setSelectedService(null);
  
  const daysOfWeek = [
      {label: 'DOM', value: 17}, {label: 'SEG', value: 18},
      {label: 'TER', value: 19}, {label: 'QUA', value: 20},
      {label: 'QUI', value: 21}, {label: 'SEX', value: 22},
      {label: 'SAB', value: 23},
  ];

  return (
    <S.PageWrapper>
      <h1>Agendar Serviço</h1>
      
      <S.CalendarStrip>
        {daysOfWeek.map(day => (
          <S.DayItem 
            key={day.label} 
            $isActive={selectedDay === day.label}
            onClick={() => setSelectedDay(day.label)}
          >
            <S.DayLabel>{day.label}</S.DayLabel>
            <S.DayValue>{day.value}</S.DayValue>
          </S.DayItem>
        ))}
      </S.CalendarStrip>
      
      <S.ServicesGrid>
        {filteredServices.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service}
            onReserveClick={handleReserveClick}
          />
        ))}
      </S.ServicesGrid>
      
      <ServiceModal 
        service={selectedService} 
        onClose={handleCloseModal} 
      />
    </S.PageWrapper>
  );
};

export default SchedulingPage;