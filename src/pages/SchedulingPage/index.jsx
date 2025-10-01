import React, { useState, useMemo } from 'react';
import { format, addDays, subDays, startOfWeek, isSameDay, getYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ServiceCard from '../../components/ServiceCard';
import ServiceModal from '../../components/ServiceModal';
import { servicesData } from '../../data/services';
import * as S from './styles';

const SchedulingPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);

  const weekDays = useMemo(() => {
    const start = startOfWeek(currentDate, { locale: ptBR });
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  }, [currentDate]);

  const filteredServices = useMemo(() => {
    if (!selectedDate) return [];
    // Filtro seguro: garante que não há serviços nulos na lista
    return servicesData
      .filter(service => service && isSameDay(service.dateTime, selectedDate))
      .sort((a, b) => a.dateTime - b.dateTime);
  }, [selectedDate]);

  const handleDayClick = (day) => setSelectedDate(day);
  const handleReserveClick = (service) => setSelectedService(service);
  const handleCloseModal = () => setSelectedService(null);
  const handleNextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const handlePrevWeek = () => setCurrentDate(subDays(currentDate, 7));

  return (
    <S.PageContainer>
      <S.TopHeaderWrapper>
        <S.Logo>IDEIA JR</S.Logo>
        <S.UserProfile>
          <span>Olá, Sabrina!</span>
          <img src="https://i.pravatar.cc/40" alt="Avatar" />
        </S.UserProfile>
      </S.TopHeaderWrapper>

      <S.MainContent>
        <S.HeaderNavWrapper>
          <S.Navigation>
            <a href="#" className="active"><span>&#9776;</span> Agendar Serviço</a>
            <a href="#"><span>&#128197;</span> Meus Agendamentos</a>
            <a href="#"><span>&#128176;</span> Gestão de Créditos</a>
          </S.Navigation>
        </S.HeaderNavWrapper>

        <S.UnitSelector>UNIDADE SAVASSI</S.UnitSelector>
        
        <S.FilterBar>
          <S.FilterButton>&#9662; Filtrar Serviço</S.FilterButton>
          <S.FilterButton>&#8644; Trocar Unidade</S.FilterButton>
          <S.SearchWrapper>
            <span>&#128269;</span>
            <input type="text" placeholder="Buscar por..." />
          </S.SearchWrapper>
        </S.FilterBar>
        
        <S.CalendarWrapper>
          <S.CalendarHeader>
            <S.ArrowButton onClick={handlePrevWeek}>&lt;</S.ArrowButton>
            <S.MonthYearDisplay>
              {format(currentDate, 'MMMM', { locale: ptBR })}/{getYear(currentDate)}
            </S.MonthYearDisplay>
            <S.ArrowButton onClick={handleNextWeek}>&gt;</S.ArrowButton>
          </S.CalendarHeader>
          <S.WeekDaysGrid>
            {weekDays.map(day => (
              <S.DayItem 
                key={day.toISOString()} 
                $isActive={selectedDate && isSameDay(day, selectedDate)}
                onClick={() => handleDayClick(day)}
              >
                <S.DayNumber>{format(day, 'd')}</S.DayNumber>
                <S.DayName>{format(day, 'EEE', { locale: ptBR })}</S.DayName>
              </S.DayItem>
            ))}
          </S.WeekDaysGrid>
        </S.CalendarWrapper>
        
        <S.ServicesGrid>
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onReserveClick={handleReserveClick}
              />
            ))
          ) : (
            <S.NoServicesMessage>Nenhum serviço disponível para esta data.</S.NoServicesMessage>
          )}
        </S.ServicesGrid>
      </S.MainContent>
      
      <S.FooterWrapper>
        <S.Logo>IDEIA JR</S.Logo>
        <S.CpeLogo>LOGO CPE</S.CpeLogo>
        <span>Produzido por CPE e Ideia Jr</span>
      </S.FooterWrapper>
      
      <ServiceModal 
        service={selectedService} 
        onClose={handleCloseModal} 
      />
    </S.PageContainer>
  );
};

export default SchedulingPage;