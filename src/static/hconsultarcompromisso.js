/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:15:13.35
*/
gx.evt.autoSkip = false;
gx.define('hconsultarcompromisso', false, function () {
   this.ServerClass =  "hconsultarcompromisso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'REGISTRAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A8567ProfissionalEmpresaId=gx.fn.getControlValue("PROFISSIONALEMPRESAID") ;
      this.A8566ProfissionalId=gx.fn.getIntegerValue("PROFISSIONALID",'.') ;
      this.A8608ProfissionalNome=gx.fn.getControlValue("PROFISSIONALNOME") ;
      this.AV38DiaSemanaNumeric=gx.fn.getIntegerValue("vDIASEMANANUMERIC",'.') ;
      this.AV43DiasSemanaData=gx.fn.getControlValue("vDIASSEMANADATA") ;
      this.A8568AgendaTipoCompromissoId=gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOID",'.') ;
      this.A8569AgendaMotivo=gx.fn.getControlValue("AGENDAMOTIVO") ;
      this.A8565AgendaHoraFinal=gx.fn.getControlValue("AGENDAHORAFINAL") ;
      this.A8564AgendaHoraInicial=gx.fn.getControlValue("AGENDAHORAINICIAL") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A8571AgendaData=gx.fn.getDateValue("AGENDADATA") ;
      this.A8570AgendaId=gx.fn.getIntegerValue("AGENDAID",'.') ;
      this.AV51HoraOds=gx.fn.getControlValue("vHORAODS") ;
      this.AV74ContSdt=gx.fn.getDecimalValue("vCONTSDT",'.',',') ;
      this.A8573AgendaTipoCompromissoCorLetra=gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOCORLETRA",'.') ;
      this.A8574AgendaTipoCompromissoCorFundo=gx.fn.getIntegerValue("AGENDATIPOCOMPROMISSOCORFUNDO",'.') ;
      this.AV37DiasSemana=gx.fn.getControlValue("vDIASSEMANA") ;
      this.AV82PessoaFantasia=gx.fn.getControlValue("vPESSOAFANTASIA") ;
      this.AV83EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV84PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.AV56HoraInicialBackColor=gx.fn.getControlValue("vHORAINICIALBACKCOLOR") ;
      this.AV58HoraBackColor=gx.fn.getControlValue("vHORABACKCOLOR") ;
      this.AV57HoraFinalBackColor=gx.fn.getControlValue("vHORAFINALBACKCOLOR") ;
      this.AV36DiasSemanaItem=gx.fn.getControlValue("vDIASSEMANAITEM") ;
   };
   this.Validv_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setGridCtrlProperty("vHORAS","Backcolor", gx.color.rgb( 219, 236, 252) );
      gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 245, 245, 245) );
      gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 245, 245, 245) );
   };
   this.s152_client=function()
   {
      if ( gx.num.val( this.AV58HoraBackColor) >= gx.num.val( this.AV56HoraInicialBackColor) && gx.num.val( this.AV58HoraBackColor) <= gx.num.val( this.AV57HoraFinalBackColor) )
      {
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 1 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 2 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 3 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 4 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 5 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 6 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 7 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 8 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 9 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSegunda == 10 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 1 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 2 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 3 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 4 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 5 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 6 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 7 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 8 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 9 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSegunda == 10 )
         {
            gx.fn.setGridCtrlProperty("vSEGUNDA","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 1 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 2 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 3 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 4 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 5 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 6 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 7 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 8 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 9 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraTerca == 10 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 1 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 2 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 3 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 4 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 5 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 6 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 7 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 8 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 9 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoTerca == 10 )
         {
            gx.fn.setGridCtrlProperty("vTERCA","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 1 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 2 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 3 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 4 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 5 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 6 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 7 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 8 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 9 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuarta == 10 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 1 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 2 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 3 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 4 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 5 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 6 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 7 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 8 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 9 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuarta == 10 )
         {
            gx.fn.setGridCtrlProperty("vQUARTA","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 1 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 2 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 3 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 4 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 5 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 6 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 7 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 8 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 9 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraQuinta == 10 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 1 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 2 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 3 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 4 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 5 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 6 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 7 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 8 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 9 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoQuinta == 10 )
         {
            gx.fn.setGridCtrlProperty("vQUINTA","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 1 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 2 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 3 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 4 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 5 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 6 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 7 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 8 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 9 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSexta == 10 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 1 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 2 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 3 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 4 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 5 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 6 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 7 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 8 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 9 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSexta == 10 )
         {
            gx.fn.setGridCtrlProperty("vSEXTA","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 1 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 2 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 3 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 4 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 5 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 6 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 7 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 8 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 9 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraSabado == 10 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 1 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 2 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 3 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 4 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 5 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 6 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 7 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 8 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 9 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoSabado == 10 )
         {
            gx.fn.setGridCtrlProperty("vSABADO","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 1 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 2 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 3 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 4 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 5 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 6 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 7 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 8 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 9 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorLetraDomingo == 10 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 128, 64, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 1 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 255, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 2 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 255, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 3 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 255, 255, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 4 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 0, 128, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 5 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 0, 255, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 6 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 0, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 7 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 255, 0, 255) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 8 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 128, 128, 128) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 9 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 0, 0, 0) );
         }
         if ( this.AV36DiasSemanaItem.AgendaTipoCompromissoCorFundoDomingo == 10 )
         {
            gx.fn.setGridCtrlProperty("vDOMINGO","Backcolor", gx.color.rgb( 128, 64, 0) );
         }
      }
      else
      {
         this.s162_client();
         this.s132_client();
      }
   };
   this.s162_client=function()
   {
      gx.fn.setGridCtrlProperty("vHORAS","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vSEGUNDA","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vTERCA","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vQUARTA","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vQUINTA","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vSEXTA","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vSABADO","Forecolor", gx.color.rgb( 0, 0, 0) );
      gx.fn.setGridCtrlProperty("vDOMINGO","Forecolor", gx.color.rgb( 0, 0, 0) );
   };
   this.e111cs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131cs2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e141cs2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e151cs2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121cs2_client=function()
   {
      this.executeServerEvent("'REGISTRAR'", false, null, false, false);
   };
   this.e161cs2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e171cs2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e211cs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,16,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,56,59,62,68,73,75,76];
   this.GXLastCtrlId =76;
   this.GridvariavelContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Gridvariavel","Gridvariavel","GridvariavelContainer",this.CmpContext,this.IsMasterPage,"hconsultarcompromisso",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridvariavelContainer = this.GridvariavelContainer;
   GridvariavelContainer.addSingleLineEdit("Horas",29,"vHORAS","","","Horas","char",0,"px",5,5,"left",null,[],"Horas","Horas",true,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Segunda",30,"vSEGUNDA","","","Segunda","char",0,"px",20,20,"left",null,[],"Segunda","Segunda",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpsegunda","vBMPSEGUNDA",31,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Terca",32,"vTERCA","","","Terca","char",0,"px",20,20,"left",null,[],"Terca","Terca",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpterca","vBMPTERCA",33,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Quarta",34,"vQUARTA","","","Quarta","char",0,"px",20,20,"left",null,[],"Quarta","Quarta",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpquarta","vBMPQUARTA",35,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Quinta",36,"vQUINTA","","","Quinta","char",0,"px",20,20,"left",null,[],"Quinta","Quinta",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpquinta","vBMPQUINTA",37,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Sexta",38,"vSEXTA","","","Sexta","char",0,"px",20,20,"left",null,[],"Sexta","Sexta",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpsexta","vBMPSEXTA",39,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Sabado",40,"vSABADO","","","Sabado","char",0,"px",20,20,"left",null,[],"Sabado","Sabado",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpsabado","vBMPSABADO",41,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Domingo",42,"vDOMINGO","","","Domingo","char",0,"px",20,20,"left",null,[],"Domingo","Domingo",true,0,false,false,"CampoGridAgenda",1,"");
   GridvariavelContainer.addBitmap("&Bmpdomingo","vBMPDOMINGO",43,0,"px",17,"px",null,"","","Image","");
   GridvariavelContainer.addSingleLineEdit("Domingoid",44,"vDOMINGOID","Domingo Id","","DomingoId","int",0,"px",4,4,"right",null,[],"Domingoid","DomingoId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Quartaid",45,"vQUARTAID","Quarta Id","","QuartaId","int",0,"px",4,4,"right",null,[],"Quartaid","QuartaId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Quintaid",46,"vQUINTAID","Quinta Id","","QuintaId","int",0,"px",4,4,"right",null,[],"Quintaid","QuintaId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Sabadoid",47,"vSABADOID","Sabado Id","","SabadoId","int",0,"px",4,4,"right",null,[],"Sabadoid","SabadoId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Segundaid",48,"vSEGUNDAID","Segunda Id","","SegundaId","int",0,"px",4,4,"right",null,[],"Segundaid","SegundaId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Sextaid",49,"vSEXTAID","Sexta Id","","SextaId","int",0,"px",4,4,"right",null,[],"Sextaid","SextaId",false,0,false,false,"Attribute",1,"");
   GridvariavelContainer.addSingleLineEdit("Tercaid",50,"vTERCAID","Terca Id","","TercaId","int",0,"px",4,4,"right",null,[],"Tercaid","TercaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridvariavelContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:null,rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV24ProfissionalId",gxold:"OV24ProfissionalId",gxvar:"AV24ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV24ProfissionalId,0)},c2v:function(){gx.O.AV24ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV61ProfissionalNome",gxold:"OV61ProfissionalNome",gxvar:"AV61ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61ProfissionalNome=Value},v2z:function(Value){gx.O.ZV61ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV61ProfissionalNome,0)},c2v:function(){gx.O.AV61ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV44ProfissionalEmpresaId",gxold:"OV44ProfissionalEmpresaId",gxvar:"AV44ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV44ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV44ProfissionalEmpresaId,0)},c2v:function(){gx.O.AV44ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAATUAL",gxz:"ZV26DiaAtual",gxold:"OV26DiaAtual",gxvar:"AV26DiaAtual",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DiaAtual=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DiaAtual=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDIAATUAL",gx.O.AV26DiaAtual,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DiaAtual=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDIAATUAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[29]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vHORAS",gxz:"ZV33Horas",gxold:"OV33Horas",gxvar:"AV33Horas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33Horas=Value},v2z:function(Value){gx.O.ZV33Horas=Value},v2c:function(row){gx.fn.setGridControlValue("vHORAS",row || gx.fn.currentGridRowImpl(28),gx.O.AV33Horas,0)},c2v:function(){gx.O.AV33Horas=this.val()},val:function(row){return gx.fn.getGridControlValue("vHORAS",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDA",gxz:"ZV27Segunda",gxold:"OV27Segunda",gxvar:"AV27Segunda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27Segunda=Value},v2z:function(Value){gx.O.ZV27Segunda=Value},v2c:function(row){gx.fn.setGridControlValue("vSEGUNDA",row || gx.fn.currentGridRowImpl(28),gx.O.AV27Segunda,0)},c2v:function(){gx.O.AV27Segunda=this.val()},val:function(row){return gx.fn.getGridControlValue("vSEGUNDA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSEGUNDA",gxz:"ZV77bmpSegunda",gxold:"OV77bmpSegunda",gxvar:"AV77bmpSegunda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV77bmpSegunda=Value},v2z:function(Value){gx.O.ZV77bmpSegunda=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSEGUNDA",row || gx.fn.currentGridRowImpl(28),gx.O.AV77bmpSegunda,gx.O.AV98Bmpsegunda_GXI)},c2v:function(){gx.O.AV98Bmpsegunda_GXI=this.val_GXI();gx.O.AV77bmpSegunda=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSEGUNDA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSEGUNDA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV98Bmpsegunda_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTERCA",gxz:"ZV28Terca",gxold:"OV28Terca",gxvar:"AV28Terca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28Terca=Value},v2z:function(Value){gx.O.ZV28Terca=Value},v2c:function(row){gx.fn.setGridControlValue("vTERCA",row || gx.fn.currentGridRowImpl(28),gx.O.AV28Terca,0)},c2v:function(){gx.O.AV28Terca=this.val()},val:function(row){return gx.fn.getGridControlValue("vTERCA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTERCA",gxz:"ZV78bmpTerca",gxold:"OV78bmpTerca",gxvar:"AV78bmpTerca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78bmpTerca=Value},v2z:function(Value){gx.O.ZV78bmpTerca=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTERCA",row || gx.fn.currentGridRowImpl(28),gx.O.AV78bmpTerca,gx.O.AV99Bmpterca_GXI)},c2v:function(){gx.O.AV99Bmpterca_GXI=this.val_GXI();gx.O.AV78bmpTerca=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTERCA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTERCA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV99Bmpterca_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQUARTA",gxz:"ZV34Quarta",gxold:"OV34Quarta",gxvar:"AV34Quarta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV34Quarta=Value},v2z:function(Value){gx.O.ZV34Quarta=Value},v2c:function(row){gx.fn.setGridControlValue("vQUARTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV34Quarta,0)},c2v:function(){gx.O.AV34Quarta=this.val()},val:function(row){return gx.fn.getGridControlValue("vQUARTA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPQUARTA",gxz:"ZV79bmpQuarta",gxold:"OV79bmpQuarta",gxvar:"AV79bmpQuarta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79bmpQuarta=Value},v2z:function(Value){gx.O.ZV79bmpQuarta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPQUARTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV79bmpQuarta,gx.O.AV100Bmpquarta_GXI)},c2v:function(){gx.O.AV100Bmpquarta_GXI=this.val_GXI();gx.O.AV79bmpQuarta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPQUARTA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPQUARTA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV100Bmpquarta_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQUINTA",gxz:"ZV29Quinta",gxold:"OV29Quinta",gxvar:"AV29Quinta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29Quinta=Value},v2z:function(Value){gx.O.ZV29Quinta=Value},v2c:function(row){gx.fn.setGridControlValue("vQUINTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV29Quinta,0)},c2v:function(){gx.O.AV29Quinta=this.val()},val:function(row){return gx.fn.getGridControlValue("vQUINTA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPQUINTA",gxz:"ZV80bmpQuinta",gxold:"OV80bmpQuinta",gxvar:"AV80bmpQuinta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV80bmpQuinta=Value},v2z:function(Value){gx.O.ZV80bmpQuinta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPQUINTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV80bmpQuinta,gx.O.AV101Bmpquinta_GXI)},c2v:function(){gx.O.AV101Bmpquinta_GXI=this.val_GXI();gx.O.AV80bmpQuinta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPQUINTA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPQUINTA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV101Bmpquinta_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEXTA",gxz:"ZV30Sexta",gxold:"OV30Sexta",gxvar:"AV30Sexta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30Sexta=Value},v2z:function(Value){gx.O.ZV30Sexta=Value},v2c:function(row){gx.fn.setGridControlValue("vSEXTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV30Sexta,0)},c2v:function(){gx.O.AV30Sexta=this.val()},val:function(row){return gx.fn.getGridControlValue("vSEXTA",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSEXTA",gxz:"ZV75bmpSexta",gxold:"OV75bmpSexta",gxvar:"AV75bmpSexta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV75bmpSexta=Value},v2z:function(Value){gx.O.ZV75bmpSexta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSEXTA",row || gx.fn.currentGridRowImpl(28),gx.O.AV75bmpSexta,gx.O.AV102Bmpsexta_GXI)},c2v:function(){gx.O.AV102Bmpsexta_GXI=this.val_GXI();gx.O.AV75bmpSexta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSEXTA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSEXTA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV102Bmpsexta_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSABADO",gxz:"ZV31Sabado",gxold:"OV31Sabado",gxvar:"AV31Sabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31Sabado=Value},v2z:function(Value){gx.O.ZV31Sabado=Value},v2c:function(row){gx.fn.setGridControlValue("vSABADO",row || gx.fn.currentGridRowImpl(28),gx.O.AV31Sabado,0)},c2v:function(){gx.O.AV31Sabado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSABADO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSABADO",gxz:"ZV81bmpSabado",gxold:"OV81bmpSabado",gxvar:"AV81bmpSabado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV81bmpSabado=Value},v2z:function(Value){gx.O.ZV81bmpSabado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSABADO",row || gx.fn.currentGridRowImpl(28),gx.O.AV81bmpSabado,gx.O.AV103Bmpsabado_GXI)},c2v:function(){gx.O.AV103Bmpsabado_GXI=this.val_GXI();gx.O.AV81bmpSabado=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSABADO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSABADO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV103Bmpsabado_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDOMINGO",gxz:"ZV32Domingo",gxold:"OV32Domingo",gxvar:"AV32Domingo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32Domingo=Value},v2z:function(Value){gx.O.ZV32Domingo=Value},v2c:function(row){gx.fn.setGridControlValue("vDOMINGO",row || gx.fn.currentGridRowImpl(28),gx.O.AV32Domingo,0)},c2v:function(){gx.O.AV32Domingo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDOMINGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDOMINGO",gxz:"ZV76bmpDomingo",gxold:"OV76bmpDomingo",gxvar:"AV76bmpDomingo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV76bmpDomingo=Value},v2z:function(Value){gx.O.ZV76bmpDomingo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDOMINGO",row || gx.fn.currentGridRowImpl(28),gx.O.AV76bmpDomingo,gx.O.AV97Bmpdomingo_GXI)},c2v:function(){gx.O.AV97Bmpdomingo_GXI=this.val_GXI();gx.O.AV76bmpDomingo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDOMINGO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDOMINGO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV97Bmpdomingo_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDOMINGOID",gxz:"ZV73DomingoId",gxold:"OV73DomingoId",gxvar:"AV73DomingoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV73DomingoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73DomingoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vDOMINGOID",row || gx.fn.currentGridRowImpl(28),gx.O.AV73DomingoId,0)},c2v:function(){gx.O.AV73DomingoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vDOMINGOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQUARTAID",gxz:"ZV70QuartaId",gxold:"OV70QuartaId",gxvar:"AV70QuartaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV70QuartaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70QuartaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vQUARTAID",row || gx.fn.currentGridRowImpl(28),gx.O.AV70QuartaId,0)},c2v:function(){gx.O.AV70QuartaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vQUARTAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vQUINTAID",gxz:"ZV69QuintaId",gxold:"OV69QuintaId",gxvar:"AV69QuintaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69QuintaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69QuintaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vQUINTAID",row || gx.fn.currentGridRowImpl(28),gx.O.AV69QuintaId,0)},c2v:function(){gx.O.AV69QuintaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vQUINTAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSABADOID",gxz:"ZV67SabadoId",gxold:"OV67SabadoId",gxvar:"AV67SabadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV67SabadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67SabadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSABADOID",row || gx.fn.currentGridRowImpl(28),gx.O.AV67SabadoId,0)},c2v:function(){gx.O.AV67SabadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSABADOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEGUNDAID",gxz:"ZV72SegundaId",gxold:"OV72SegundaId",gxvar:"AV72SegundaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV72SegundaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72SegundaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSEGUNDAID",row || gx.fn.currentGridRowImpl(28),gx.O.AV72SegundaId,0)},c2v:function(){gx.O.AV72SegundaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSEGUNDAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEXTAID",gxz:"ZV68SextaId",gxold:"OV68SextaId",gxvar:"AV68SextaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV68SextaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68SextaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSEXTAID",row || gx.fn.currentGridRowImpl(28),gx.O.AV68SextaId,0)},c2v:function(){gx.O.AV68SextaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSEXTAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridvariavelContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTERCAID",gxz:"ZV71TercaId",gxold:"OV71TercaId",gxvar:"AV71TercaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV71TercaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71TercaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTERCAID",row || gx.fn.currentGridRowImpl(28),gx.O.AV71TercaId,0)},c2v:function(){gx.O.AV71TercaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTERCAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE1",grid:0};
   GXValidFnc[56]={fld:"IMAGE6",grid:0};
   GXValidFnc[59]={fld:"IMAGE2",grid:0};
   GXValidFnc[62]={fld:"IMAGE4",grid:0};
   GXValidFnc[68]={fld:"TABLE6",grid:0};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={fld:"BTNHELP",grid:0};
   GXValidFnc[76]={fld:"PROMPT_PROFISSIONALID",grid:0};
   this.AV24ProfissionalId = 0 ;
   this.ZV24ProfissionalId = 0 ;
   this.OV24ProfissionalId = 0 ;
   this.AV61ProfissionalNome = "" ;
   this.ZV61ProfissionalNome = "" ;
   this.OV61ProfissionalNome = "" ;
   this.AV44ProfissionalEmpresaId = "" ;
   this.ZV44ProfissionalEmpresaId = "" ;
   this.OV44ProfissionalEmpresaId = "" ;
   this.AV26DiaAtual = gx.date.nullDate() ;
   this.ZV26DiaAtual = gx.date.nullDate() ;
   this.OV26DiaAtual = gx.date.nullDate() ;
   this.ZV33Horas = "" ;
   this.OV33Horas = "" ;
   this.ZV27Segunda = "" ;
   this.OV27Segunda = "" ;
   this.ZV77bmpSegunda = "" ;
   this.OV77bmpSegunda = "" ;
   this.ZV28Terca = "" ;
   this.OV28Terca = "" ;
   this.ZV78bmpTerca = "" ;
   this.OV78bmpTerca = "" ;
   this.ZV34Quarta = "" ;
   this.OV34Quarta = "" ;
   this.ZV79bmpQuarta = "" ;
   this.OV79bmpQuarta = "" ;
   this.ZV29Quinta = "" ;
   this.OV29Quinta = "" ;
   this.ZV80bmpQuinta = "" ;
   this.OV80bmpQuinta = "" ;
   this.ZV30Sexta = "" ;
   this.OV30Sexta = "" ;
   this.ZV75bmpSexta = "" ;
   this.OV75bmpSexta = "" ;
   this.ZV31Sabado = "" ;
   this.OV31Sabado = "" ;
   this.ZV81bmpSabado = "" ;
   this.OV81bmpSabado = "" ;
   this.ZV32Domingo = "" ;
   this.OV32Domingo = "" ;
   this.ZV76bmpDomingo = "" ;
   this.OV76bmpDomingo = "" ;
   this.ZV73DomingoId = 0 ;
   this.OV73DomingoId = 0 ;
   this.ZV70QuartaId = 0 ;
   this.OV70QuartaId = 0 ;
   this.ZV69QuintaId = 0 ;
   this.OV69QuintaId = 0 ;
   this.ZV67SabadoId = 0 ;
   this.OV67SabadoId = 0 ;
   this.ZV72SegundaId = 0 ;
   this.OV72SegundaId = 0 ;
   this.ZV68SextaId = 0 ;
   this.OV68SextaId = 0 ;
   this.ZV71TercaId = 0 ;
   this.OV71TercaId = 0 ;
   this.AV24ProfissionalId = 0 ;
   this.AV61ProfissionalNome = "" ;
   this.AV44ProfissionalEmpresaId = "" ;
   this.AV26DiaAtual = gx.date.nullDate() ;
   this.AV33Horas = "" ;
   this.AV27Segunda = "" ;
   this.AV77bmpSegunda = "" ;
   this.AV28Terca = "" ;
   this.AV78bmpTerca = "" ;
   this.AV34Quarta = "" ;
   this.AV79bmpQuarta = "" ;
   this.AV29Quinta = "" ;
   this.AV80bmpQuinta = "" ;
   this.AV30Sexta = "" ;
   this.AV75bmpSexta = "" ;
   this.AV31Sabado = "" ;
   this.AV81bmpSabado = "" ;
   this.AV32Domingo = "" ;
   this.AV76bmpDomingo = "" ;
   this.AV73DomingoId = 0 ;
   this.AV70QuartaId = 0 ;
   this.AV69QuintaId = 0 ;
   this.AV67SabadoId = 0 ;
   this.AV72SegundaId = 0 ;
   this.AV68SextaId = 0 ;
   this.AV71TercaId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8573AgendaTipoCompromissoCorLetra = 0 ;
   this.A8574AgendaTipoCompromissoCorFundo = 0 ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8564AgendaHoraInicial = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.A8569AgendaMotivo = "" ;
   this.A8570AgendaId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.AV38DiaSemanaNumeric = 0 ;
   this.AV43DiasSemanaData = [ ] ;
   this.AV51HoraOds = [ ] ;
   this.AV74ContSdt = 0 ;
   this.AV37DiasSemana = [ ] ;
   this.AV82PessoaFantasia = "" ;
   this.AV83EmpresaPessoasEmpresaId = "" ;
   this.AV84PessoaId = 0 ;
   this.AV56HoraInicialBackColor = "" ;
   this.AV58HoraBackColor = "" ;
   this.AV57HoraFinalBackColor = "" ;
   this.AV36DiasSemanaItem = {} ;
   this.Events = {"e111cs2_client": ["'FECHAR'", true] ,"e131cs2_client": ["'GXM_PREVIOUS'", true] ,"e141cs2_client": ["'GXM_NEXT'", true] ,"e151cs2_client": ["ENTER", true] ,"e121cs2_client": ["'REGISTRAR'", true] ,"e161cs2_client": ["'CANCELAR'", true] ,"e171cs2_client": ["'IMPRIMIR'", true] ,"e211cs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDVARIAVEL_nFirstRecordOnPage'},{av:'GRIDVARIAVEL_nEOF'},{av:'AV82PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV83EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV84PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV56HoraInicialBackColor',fld:'vHORAINICIALBACKCOLOR'},{av:'AV58HoraBackColor',fld:'vHORABACKCOLOR'},{av:'AV57HoraFinalBackColor',fld:'vHORAFINALBACKCOLOR'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV44ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8569AgendaMotivo',fld:'AGENDAMOTIVO'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV74ContSdt',fld:'vCONTSDT'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'}],[{av:'AV62Parm',fld:'vPARM'},{av:'AV86DiaAtualString',fld:'vDIAATUALSTRING'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV61ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'FECHAR',prop:'Visible'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV41Y',fld:'vY'},{av:'AV25DiaSemana',fld:'vDIASEMANA'},{av:'AV90DiaString',fld:'vDIASTRING'},{av:'gx.fn.getCtrlProperty("vSABADO","Title")',ctrl:'vSABADO',prop:'Title'},{av:'AV42DiasSemanaItemData',fld:'vDIASSEMANAITEMDATA'},{av:'gx.fn.getCtrlProperty("vSEXTA","Title")',ctrl:'vSEXTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUINTA","Title")',ctrl:'vQUINTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUARTA","Title")',ctrl:'vQUARTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vTERCA","Title")',ctrl:'vTERCA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Title")',ctrl:'vSEGUNDA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Title")',ctrl:'vDOMINGO',prop:'Title'},{av:'AV46ContHoras',fld:'vCONTHORAS'},{av:'AV111GXV2',fld:'vGXV2'},{av:'AV89SnExisteHoraFin',fld:'vSNEXISTEHORAFIN'},{av:'AV112GXV3',fld:'vGXV3'},{av:'AV50HoraOdsItem',fld:'vHORAODSITEM'},{av:'AV88SnExisteHoraIni',fld:'vSNEXISTEHORAINI'},{av:'AV48SubCaracIni',fld:'vSUBCARACINI'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV49SubCaracFin',fld:'vSUBCARACFIN'},{av:'AV35X',fld:'vX'},{av:'AV52HorasCompara',fld:'vHORASCOMPARA'},{av:'AV53SnEncontrado',fld:'vSNENCONTRADO'},{av:'AV113GXV4',fld:'vGXV4'},{av:'AV47SubCarac',fld:'vSUBCARAC'},{av:'AV114GXV5',fld:'vGXV5'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'AV115GXV6',fld:'vGXV6'},{av:'AV54HoraInicial',fld:'vHORAINICIAL'},{av:'AV55HoraFinal',fld:'vHORAFINAL'},{av:'AV74ContSdt',fld:'vCONTSDT'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV93Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8569AgendaMotivo',fld:'AGENDAMOTIVO'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV44ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV74ContSdt',fld:'vCONTSDT'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'}],[{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'FECHAR',prop:'Visible'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV41Y',fld:'vY'},{av:'AV25DiaSemana',fld:'vDIASEMANA'},{av:'AV90DiaString',fld:'vDIASTRING'},{av:'gx.fn.getCtrlProperty("vSABADO","Title")',ctrl:'vSABADO',prop:'Title'},{av:'AV42DiasSemanaItemData',fld:'vDIASSEMANAITEMDATA'},{av:'gx.fn.getCtrlProperty("vSEXTA","Title")',ctrl:'vSEXTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUINTA","Title")',ctrl:'vQUINTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUARTA","Title")',ctrl:'vQUARTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vTERCA","Title")',ctrl:'vTERCA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Title")',ctrl:'vSEGUNDA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Title")',ctrl:'vDOMINGO',prop:'Title'},{av:'AV46ContHoras',fld:'vCONTHORAS'},{av:'AV111GXV2',fld:'vGXV2'},{av:'AV89SnExisteHoraFin',fld:'vSNEXISTEHORAFIN'},{av:'AV112GXV3',fld:'vGXV3'},{av:'AV50HoraOdsItem',fld:'vHORAODSITEM'},{av:'AV88SnExisteHoraIni',fld:'vSNEXISTEHORAINI'},{av:'AV48SubCaracIni',fld:'vSUBCARACINI'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV49SubCaracFin',fld:'vSUBCARACFIN'},{av:'AV35X',fld:'vX'},{av:'AV52HorasCompara',fld:'vHORASCOMPARA'},{av:'AV53SnEncontrado',fld:'vSNENCONTRADO'},{av:'AV113GXV4',fld:'vGXV4'},{av:'AV47SubCarac',fld:'vSUBCARAC'},{av:'AV114GXV5',fld:'vGXV5'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'AV115GXV6',fld:'vGXV6'},{av:'AV54HoraInicial',fld:'vHORAINICIAL'},{av:'AV55HoraFinal',fld:'vHORAFINAL'},{av:'AV74ContSdt',fld:'vCONTSDT'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8569AgendaMotivo',fld:'AGENDAMOTIVO'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV44ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV74ContSdt',fld:'vCONTSDT'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'}],[{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'FECHAR',prop:'Visible'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV41Y',fld:'vY'},{av:'AV25DiaSemana',fld:'vDIASEMANA'},{av:'AV90DiaString',fld:'vDIASTRING'},{av:'gx.fn.getCtrlProperty("vSABADO","Title")',ctrl:'vSABADO',prop:'Title'},{av:'AV42DiasSemanaItemData',fld:'vDIASSEMANAITEMDATA'},{av:'gx.fn.getCtrlProperty("vSEXTA","Title")',ctrl:'vSEXTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUINTA","Title")',ctrl:'vQUINTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUARTA","Title")',ctrl:'vQUARTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vTERCA","Title")',ctrl:'vTERCA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Title")',ctrl:'vSEGUNDA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Title")',ctrl:'vDOMINGO',prop:'Title'},{av:'AV46ContHoras',fld:'vCONTHORAS'},{av:'AV111GXV2',fld:'vGXV2'},{av:'AV89SnExisteHoraFin',fld:'vSNEXISTEHORAFIN'},{av:'AV112GXV3',fld:'vGXV3'},{av:'AV50HoraOdsItem',fld:'vHORAODSITEM'},{av:'AV88SnExisteHoraIni',fld:'vSNEXISTEHORAINI'},{av:'AV48SubCaracIni',fld:'vSUBCARACINI'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV49SubCaracFin',fld:'vSUBCARACFIN'},{av:'AV35X',fld:'vX'},{av:'AV52HorasCompara',fld:'vHORASCOMPARA'},{av:'AV53SnEncontrado',fld:'vSNENCONTRADO'},{av:'AV113GXV4',fld:'vGXV4'},{av:'AV47SubCarac',fld:'vSUBCARAC'},{av:'AV114GXV5',fld:'vGXV5'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'AV115GXV6',fld:'vGXV6'},{av:'AV54HoraInicial',fld:'vHORAINICIAL'},{av:'AV55HoraFinal',fld:'vHORAFINAL'},{av:'AV74ContSdt',fld:'vCONTSDT'}]];
   this.EvtParms["ENTER"] = [[{av:'AV45SNErro',fld:'vSNERRO'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV44ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'},{av:'A8569AgendaMotivo',fld:'AGENDAMOTIVO'},{av:'A8565AgendaHoraFinal',fld:'AGENDAHORAFINAL'},{av:'A8564AgendaHoraInicial',fld:'AGENDAHORAINICIAL'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8571AgendaData',fld:'AGENDADATA'},{av:'A8570AgendaId',fld:'AGENDAID'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV74ContSdt',fld:'vCONTSDT'},{av:'A8573AgendaTipoCompromissoCorLetra',fld:'AGENDATIPOCOMPROMISSOCORLETRA'},{av:'A8574AgendaTipoCompromissoCorFundo',fld:'AGENDATIPOCOMPROMISSOCORFUNDO'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'}],[{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'FECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPROFISSIONALID","Enabled")',ctrl:'vPROFISSIONALID',prop:'Enabled'},{av:'AV37DiasSemana',fld:'vDIASSEMANA'},{av:'AV43DiasSemanaData',fld:'vDIASSEMANADATA'},{av:'AV51HoraOds',fld:'vHORAODS'},{av:'AV45SNErro',fld:'vSNERRO'},{av:'AV65MensagemErro',fld:'vMENSAGEMERRO'},{av:'AV26DiaAtual',fld:'vDIAATUAL'},{av:'AV38DiaSemanaNumeric',fld:'vDIASEMANANUMERIC'},{av:'AV41Y',fld:'vY'},{av:'AV25DiaSemana',fld:'vDIASEMANA'},{av:'AV90DiaString',fld:'vDIASTRING'},{av:'gx.fn.getCtrlProperty("vSABADO","Title")',ctrl:'vSABADO',prop:'Title'},{av:'AV42DiasSemanaItemData',fld:'vDIASSEMANAITEMDATA'},{av:'gx.fn.getCtrlProperty("vSEXTA","Title")',ctrl:'vSEXTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUINTA","Title")',ctrl:'vQUINTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vQUARTA","Title")',ctrl:'vQUARTA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vTERCA","Title")',ctrl:'vTERCA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Title")',ctrl:'vSEGUNDA',prop:'Title'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Title")',ctrl:'vDOMINGO',prop:'Title'},{av:'AV46ContHoras',fld:'vCONTHORAS'},{av:'AV111GXV2',fld:'vGXV2'},{av:'AV89SnExisteHoraFin',fld:'vSNEXISTEHORAFIN'},{av:'AV112GXV3',fld:'vGXV3'},{av:'AV50HoraOdsItem',fld:'vHORAODSITEM'},{av:'AV88SnExisteHoraIni',fld:'vSNEXISTEHORAINI'},{av:'AV48SubCaracIni',fld:'vSUBCARACINI'},{av:'AV49SubCaracFin',fld:'vSUBCARACFIN'},{av:'AV35X',fld:'vX'},{av:'AV52HorasCompara',fld:'vHORASCOMPARA'},{av:'AV53SnEncontrado',fld:'vSNENCONTRADO'},{av:'AV113GXV4',fld:'vGXV4'},{av:'AV47SubCarac',fld:'vSUBCARAC'},{av:'AV114GXV5',fld:'vGXV5'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'AV115GXV6',fld:'vGXV6'},{av:'AV54HoraInicial',fld:'vHORAINICIAL'},{av:'AV55HoraFinal',fld:'vHORAFINAL'},{av:'AV74ContSdt',fld:'vCONTSDT'}]];
   this.EvtParms["GRIDVARIAVEL.LOAD"] = [[{av:'AV37DiasSemana',fld:'vDIASSEMANA'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV82PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV83EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV84PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV56HoraInicialBackColor',fld:'vHORAINICIALBACKCOLOR'},{av:'AV58HoraBackColor',fld:'vHORABACKCOLOR'},{av:'AV57HoraFinalBackColor',fld:'vHORAFINALBACKCOLOR'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'}],[{av:'AV96GXV1',fld:'vGXV1'},{av:'AV36DiasSemanaItem',fld:'vDIASSEMANAITEM'},{av:'AV33Horas',fld:'vHORAS'},{av:'AV32Domingo',fld:'vDOMINGO'},{av:'AV27Segunda',fld:'vSEGUNDA'},{av:'AV28Terca',fld:'vTERCA'},{av:'AV29Quinta',fld:'vQUINTA'},{av:'AV30Sexta',fld:'vSEXTA'},{av:'AV31Sabado',fld:'vSABADO'},{av:'AV73DomingoId',fld:'vDOMINGOID'},{av:'AV72SegundaId',fld:'vSEGUNDAID'},{av:'AV71TercaId',fld:'vTERCAID'},{av:'AV70QuartaId',fld:'vQUARTAID'},{av:'AV69QuintaId',fld:'vQUINTAID'},{av:'AV68SextaId',fld:'vSEXTAID'},{av:'AV67SabadoId',fld:'vSABADOID'},{av:'AV76bmpDomingo',fld:'vBMPDOMINGO'},{av:'gx.fn.getCtrlProperty("vBMPDOMINGO","Link")',ctrl:'vBMPDOMINGO',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPDOMINGO","Tooltiptext")',ctrl:'vBMPDOMINGO',prop:'Tooltiptext'},{av:'AV77bmpSegunda',fld:'vBMPSEGUNDA'},{av:'gx.fn.getCtrlProperty("vBMPSEGUNDA","Link")',ctrl:'vBMPSEGUNDA',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPSEGUNDA","Tooltiptext")',ctrl:'vBMPSEGUNDA',prop:'Tooltiptext'},{av:'AV78bmpTerca',fld:'vBMPTERCA'},{av:'gx.fn.getCtrlProperty("vBMPTERCA","Link")',ctrl:'vBMPTERCA',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPTERCA","Tooltiptext")',ctrl:'vBMPTERCA',prop:'Tooltiptext'},{av:'AV79bmpQuarta',fld:'vBMPQUARTA'},{av:'gx.fn.getCtrlProperty("vBMPQUARTA","Link")',ctrl:'vBMPQUARTA',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPQUARTA","Tooltiptext")',ctrl:'vBMPQUARTA',prop:'Tooltiptext'},{av:'AV80bmpQuinta',fld:'vBMPQUINTA'},{av:'gx.fn.getCtrlProperty("vBMPQUINTA","Link")',ctrl:'vBMPQUINTA',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPQUINTA","Tooltiptext")',ctrl:'vBMPQUINTA',prop:'Tooltiptext'},{av:'AV75bmpSexta',fld:'vBMPSEXTA'},{av:'gx.fn.getCtrlProperty("vBMPSEXTA","Link")',ctrl:'vBMPSEXTA',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPSEXTA","Tooltiptext")',ctrl:'vBMPSEXTA',prop:'Tooltiptext'},{av:'AV81bmpSabado',fld:'vBMPSABADO'},{av:'gx.fn.getCtrlProperty("vBMPSABADO","Link")',ctrl:'vBMPSABADO',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPSABADO","Tooltiptext")',ctrl:'vBMPSABADO',prop:'Tooltiptext'},{av:'AV57HoraFinalBackColor',fld:'vHORAFINALBACKCOLOR'},{av:'AV56HoraInicialBackColor',fld:'vHORAINICIALBACKCOLOR'},{av:'AV58HoraBackColor',fld:'vHORABACKCOLOR'},{av:'AV83EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV84PessoaId',fld:'vPESSOAID'},{av:'AV34Quarta',fld:'vQUARTA'},{av:'gx.fn.getCtrlProperty("vHORAS","Backcolor")',ctrl:'vHORAS',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Backcolor")',ctrl:'vSEGUNDA',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vTERCA","Backcolor")',ctrl:'vTERCA',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vQUARTA","Backcolor")',ctrl:'vQUARTA',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vQUINTA","Backcolor")',ctrl:'vQUINTA',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vSEXTA","Backcolor")',ctrl:'vSEXTA',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vSABADO","Backcolor")',ctrl:'vSABADO',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Backcolor")',ctrl:'vDOMINGO',prop:'Backcolor'},{av:'AV82PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'gx.fn.getCtrlProperty("vSEGUNDA","Forecolor")',ctrl:'vSEGUNDA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vTERCA","Forecolor")',ctrl:'vTERCA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vQUARTA","Forecolor")',ctrl:'vQUARTA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vQUINTA","Forecolor")',ctrl:'vQUINTA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vSEXTA","Forecolor")',ctrl:'vSEXTA',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vSABADO","Forecolor")',ctrl:'vSABADO',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vDOMINGO","Forecolor")',ctrl:'vDOMINGO',prop:'Forecolor'},{av:'gx.fn.getCtrlProperty("vHORAS","Forecolor")',ctrl:'vHORAS',prop:'Forecolor'}]];
   this.EvtParms["'REGISTRAR'"] = [[{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'}],[{av:'AV85DataHoje',fld:'vDATAHOJE'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'CONSULTAR',prop:'Enabled'},{ctrl:'FECHAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPROFISSIONALID","Enabled")',ctrl:'vPROFISSIONALID',prop:'Enabled'},{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV61ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV26DiaAtual',fld:'vDIAATUAL'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV24ProfissionalId',fld:'vPROFISSIONALID'}],[]];
   this.setPrompt("PROMPT_PROFISSIONALID", [13]);
   this.EnterCtrl = ["CONSULTAR"];
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV38DiaSemanaNumeric", "vDIASEMANANUMERIC", 0, "int");
   this.setVCMap("AV43DiasSemanaData", "vDIASSEMANADATA", 0, "CollDiasSemana.DiasSemanaItem");
   this.setVCMap("A8568AgendaTipoCompromissoId", "AGENDATIPOCOMPROMISSOID", 0, "int");
   this.setVCMap("A8569AgendaMotivo", "AGENDAMOTIVO", 0, "vchar");
   this.setVCMap("A8565AgendaHoraFinal", "AGENDAHORAFINAL", 0, "char");
   this.setVCMap("A8564AgendaHoraInicial", "AGENDAHORAINICIAL", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A8571AgendaData", "AGENDADATA", 0, "date");
   this.setVCMap("A8570AgendaId", "AGENDAID", 0, "int");
   this.setVCMap("AV51HoraOds", "vHORAODS", 0, "CollHorasODS.HorasODSItem");
   this.setVCMap("AV74ContSdt", "vCONTSDT", 0, "decimal");
   this.setVCMap("A8573AgendaTipoCompromissoCorLetra", "AGENDATIPOCOMPROMISSOCORLETRA", 0, "int");
   this.setVCMap("A8574AgendaTipoCompromissoCorFundo", "AGENDATIPOCOMPROMISSOCORFUNDO", 0, "int");
   this.setVCMap("AV37DiasSemana", "vDIASSEMANA", 0, "CollDiasSemana.DiasSemanaItem");
   this.setVCMap("AV82PessoaFantasia", "vPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV83EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV84PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV56HoraInicialBackColor", "vHORAINICIALBACKCOLOR", 0, "char");
   this.setVCMap("AV58HoraBackColor", "vHORABACKCOLOR", 0, "char");
   this.setVCMap("AV57HoraFinalBackColor", "vHORAFINALBACKCOLOR", 0, "char");
   this.setVCMap("AV36DiasSemanaItem", "vDIASSEMANAITEM", 0, "DiasSemana.DiasSemanaItem");
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("A8566ProfissionalId", "PROFISSIONALID", 0, "int");
   this.setVCMap("A8608ProfissionalNome", "PROFISSIONALNOME", 0, "svchar");
   this.setVCMap("AV38DiaSemanaNumeric", "vDIASEMANANUMERIC", 0, "int");
   this.setVCMap("AV43DiasSemanaData", "vDIASSEMANADATA", 0, "CollDiasSemana.DiasSemanaItem");
   this.setVCMap("A8568AgendaTipoCompromissoId", "AGENDATIPOCOMPROMISSOID", 0, "int");
   this.setVCMap("A8569AgendaMotivo", "AGENDAMOTIVO", 0, "vchar");
   this.setVCMap("A8565AgendaHoraFinal", "AGENDAHORAFINAL", 0, "char");
   this.setVCMap("A8564AgendaHoraInicial", "AGENDAHORAINICIAL", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A8571AgendaData", "AGENDADATA", 0, "date");
   this.setVCMap("A8570AgendaId", "AGENDAID", 0, "int");
   this.setVCMap("AV51HoraOds", "vHORAODS", 0, "CollHorasODS.HorasODSItem");
   this.setVCMap("AV74ContSdt", "vCONTSDT", 0, "decimal");
   this.setVCMap("A8573AgendaTipoCompromissoCorLetra", "AGENDATIPOCOMPROMISSOCORLETRA", 0, "int");
   this.setVCMap("A8574AgendaTipoCompromissoCorFundo", "AGENDATIPOCOMPROMISSOCORFUNDO", 0, "int");
   this.setVCMap("AV37DiasSemana", "vDIASSEMANA", 0, "CollDiasSemana.DiasSemanaItem");
   this.setVCMap("AV82PessoaFantasia", "vPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV83EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV84PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("AV56HoraInicialBackColor", "vHORAINICIALBACKCOLOR", 0, "char");
   this.setVCMap("AV58HoraBackColor", "vHORABACKCOLOR", 0, "char");
   this.setVCMap("AV57HoraFinalBackColor", "vHORAFINALBACKCOLOR", 0, "char");
   this.setVCMap("AV36DiasSemanaItem", "vDIASSEMANAITEM", 0, "DiasSemana.DiasSemanaItem");
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8567ProfissionalEmpresaId"});
   GridvariavelContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8566ProfissionalId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8608ProfissionalNome"});
   GridvariavelContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV38DiaSemanaNumeric"});
   GridvariavelContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV43DiasSemanaData"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8568AgendaTipoCompromissoId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8569AgendaMotivo"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8565AgendaHoraFinal"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8564AgendaHoraInicial"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8571AgendaData"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8570AgendaId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV51HoraOds"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV74ContSdt"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8573AgendaTipoCompromissoCorLetra"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A8574AgendaTipoCompromissoCorFundo"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV37DiasSemana"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV82PessoaFantasia"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV83EmpresaPessoasEmpresaId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV84PessoaId"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV56HoraInicialBackColor"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV58HoraBackColor"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV57HoraFinalBackColor"});
   GridvariavelContainer.addRefreshingVar({rfrVar:"AV36DiasSemanaItem"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarcompromisso());
