using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models.Enum
{
    public enum PrioridadeEnum : int
    {
        [Description("Não Definido")]
		NaoDefinido = 0,
        [Description("Baixa")]
		Baixa = 1,
        [Description("Normal")]
		Normal = 1,
        [Description("Alta")]
		Alta = 1
    }
}