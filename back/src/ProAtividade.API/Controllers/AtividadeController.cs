using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public Atividade Get()
        {
            return new Atividade();
        }    
        [HttpGet("{id}")]
        public string GetComId(int id)
        {
            return $"get com id {id}";
        }
        [HttpPost]
        public Atividade Post(Atividade atividade)
        {
            return atividade;
        }
        [HttpPut("{id}")]
        public string Put(int Id)
        {
            return $"Put id: {Id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"delete id: {id}";
        }
    }
}