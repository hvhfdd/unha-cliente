document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const clienteNome = document.getElementById('clienteNome').value;
    const tipoServico = document.getElementById('tipoServico').value;
    const dataAgendamento = document.getElementById('dataAgendamento').value;
    const telefoneCliente = document.getElementById('telefoneCliente').value;

    const agendamento = {
        nome: clienteNome,
        servico: tipoServico,
        data: dataAgendamento,
        telefone: telefoneCliente
    };

    // Recupera agendamentos e horários bloqueados
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    let horariosBloqueados = JSON.parse(localStorage.getItem('horariosBloqueados')) || [];

    // Verifica se o horário já está agendado ou bloqueado
    if (horariosBloqueados.includes(dataAgendamento) || agendamentos.some(a => a.data === dataAgendamento)) {
        document.getElementById('msgResposta').innerText = 'Horário não disponível. Escolha outro horário.';
    } else {
        agendamentos.push(agendamento);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
        document.getElementById('msgResposta').innerText = 'Agendamento realizado com sucesso!';
    }
});
