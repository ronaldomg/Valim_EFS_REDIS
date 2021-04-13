/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:14:58.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultasaldoporhistorico', false, function () {
   this.ServerClass =  "hconsultasaldoporhistorico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV32TpErro=gx.fn.getIntegerValue("vTPERRO",'.') ;
      this.AV67Saldo=gx.fn.getDecimalValue("vSALDO",'.',',') ;
      this.AV40DataAnterior=gx.fn.getDateValue("vDATAANTERIOR") ;
      this.AV81LancamentoCxaBcoDataAnt=gx.fn.getDateValue("vLANCAMENTOCXABCODATAANT") ;
      this.A1930LancamentoCxaBcoData=gx.fn.getDateValue("LANCAMENTOCXABCODATA") ;
      this.A1871LancamentoCxaBcoHisId=gx.fn.getIntegerValue("LANCAMENTOCXABCOHISID",'.') ;
      this.A1928LancamentoCxaBcoEmpresaid=gx.fn.getControlValue("LANCAMENTOCXABCOEMPRESAID") ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1868LancamentoCxaBcoCaiBanId=gx.fn.getIntegerValue("LANCAMENTOCXABCOCAIBANID",'.') ;
      this.A1872LancamentoCxaBcoHisDescricao=gx.fn.getControlValue("LANCAMENTOCXABCOHISDESCRICAO") ;
      this.A1933LancamentoCxaBcoValor=gx.fn.getDecimalValue("LANCAMENTOCXABCOVALOR",'.',',') ;
      this.AV79HistoricoCxaBcoEmpresaId=gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID") ;
      this.AV89ContLinhas=gx.fn.getIntegerValue("vCONTLINHAS",'.') ;
   };
   this.s162_client=function()
   {
      this.AV76Dia = gx.num.trunc( gx.date.day( this.AV24DataInicial) ,0) ;
      if ( this.AV76Dia == 1 )
      {
         this.AV40DataAnterior =  gx.date.eom( gx.date.addmth( this.AV24DataInicial, -1))  ;
      }
      else
      {
         this.AV76Dia = gx.num.trunc( this.AV76Dia - 1 ,0) ;
         this.AV77DataAnteriorStr =  gx.num.str( this.AV76Dia, 10, 0) + "/" + gx.num.str( gx.date.month( this.AV24DataInicial), 10, 0) + "/" + gx.num.str( gx.date.year( this.AV24DataInicial), 10, 0)  ;
         this.AV40DataAnterior =  gx.date.ctod( this.AV77DataAnteriorStr, "DMY4")  ;
      }
   };
   this.e11ba2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e12ba2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e14ba2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ba2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e15ba2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e16ba2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e21ba2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,30,34,37,39,41,49,50,51,52,53,54,55,56,62,66,69,71,73,75,77,78,79,80,81,82,84,85];
   this.GXLastCtrlId =85;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasaldoporhistorico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Datastring",49,"vDATASTRING","Data","","DataString","char",0,"px",10,10,"left",null,[],"Datastring","DataString",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Lancamentocxabcohisidant",50,"vLANCAMENTOCXABCOHISIDANT","Histórico","","LancamentoCxaBcoHisIdAnt","int",0,"px",4,4,"right",null,[],"Lancamentocxabcohisidant","LancamentoCxaBcoHisIdAnt",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Lancamentocxabcohisdescricao",51,"vLANCAMENTOCXABCOHISDESCRICAO","Descrição Histórico","","LancamentoCxaBcoHisDescricao","svchar",0,"px",25,25,"left",null,[],"Lancamentocxabcohisdescricao","LancamentoCxaBcoHisDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Lancamentocxabcovalorgrid",52,"vLANCAMENTOCXABCOVALORGRID","Valor","","LancamentoCxaBcoValorGrid","decimal",0,"px",18,18,"right",null,[],"Lancamentocxabcovalorgrid","LancamentoCxaBcoValorGrid",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Lancamentocxabcovalor",53,"vLANCAMENTOCXABCOVALOR","Valor","","LancamentoCxaBcoValor","decimal",0,"px",18,18,"right",null,[],"Lancamentocxabcovalor","LancamentoCxaBcoValor",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tpdebcre",54,"vTPDEBCRE","D/C","","TpDebCre","char",0,"px",1,1,"left",null,[],"Tpdebcre","TpDebCre",true,0,false,false,"Attribute",1,"GridColumnImage");
   GridContainer.addSingleLineEdit("Saldogrid",55,"vSALDOGRID","Saldo","","SaldoGrid","decimal",0,"px",18,18,"right",null,[],"Saldogrid","SaldoGrid",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tpdebcresaldo",56,"vTPDEBCRESALDO","D/C","","TpDebCreSaldo","char",0,"px",1,1,"left",null,[],"Tpdebcresaldo","TpDebCreSaldo",true,0,false,false,"Attribute",1,"GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV68CaixaBancoId",gxold:"OV68CaixaBancoId",gxvar:"AV68CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV68CaixaBancoId,0)},c2v:function(){gx.O.AV68CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV69CaixaBancoDescricao",gxold:"OV69CaixaBancoDescricao",gxvar:"AV69CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV69CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV69CaixaBancoDescricao,0)},c2v:function(){gx.O.AV69CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE11",grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINICIAL",gxz:"ZV24DataInicial",gxold:"OV24DataInicial",gxvar:"AV24DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV24DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFINAL",gxz:"ZV25DataFinal",gxold:"OV25DataFinal",gxvar:"AV25DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV25DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNTOTALIZADATA",gxz:"ZV85SnTotalizaData",gxold:"OV85SnTotalizaData",gxvar:"AV85SnTotalizaData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV85SnTotalizaData=Value},v2z:function(Value){gx.O.ZV85SnTotalizaData=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNTOTALIZADATA",gx.O.AV85SnTotalizaData,"S")},c2v:function(){gx.O.AV85SnTotalizaData=this.val()},val:function(){return gx.fn.getControlValue("vSNTOTALIZADATA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={fld:"TABLESALDOANTERIOR",grid:0};
   GXValidFnc[37]={fld:"SALDOANTERIOR", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOTELA",gxz:"ZV71SaldoTela",gxold:"OV71SaldoTela",gxvar:"AV71SaldoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71SaldoTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71SaldoTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSALDOTELA",gx.O.AV71SaldoTela,2,',')},c2v:function(){gx.O.AV71SaldoTela=this.val()},val:function(){return gx.fn.getDecimalValue("vSALDOTELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCDEBCRE",gxz:"ZV72DescDebCre",gxold:"OV72DescDebCre",gxvar:"AV72DescDebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DescDebCre=Value},v2z:function(Value){gx.O.ZV72DescDebCre=Value},v2c:function(){gx.fn.setControlValue("vDESCDEBCRE",gx.O.AV72DescDebCre,0)},c2v:function(){gx.O.AV72DescDebCre=this.val()},val:function(){return gx.fn.getControlValue("vDESCDEBCRE")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDATASTRING",gxz:"ZV87DataString",gxold:"OV87DataString",gxvar:"AV87DataString",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV87DataString=Value},v2z:function(Value){gx.O.ZV87DataString=Value},v2c:function(row){gx.fn.setGridControlValue("vDATASTRING",row || gx.fn.currentGridRowImpl(48),gx.O.AV87DataString,0)},c2v:function(){gx.O.AV87DataString=this.val()},val:function(row){return gx.fn.getGridControlValue("vDATASTRING",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISIDANT",gxz:"ZV83LancamentoCxaBcoHisIdAnt",gxold:"OV83LancamentoCxaBcoHisIdAnt",gxvar:"AV83LancamentoCxaBcoHisIdAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV83LancamentoCxaBcoHisIdAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83LancamentoCxaBcoHisIdAnt=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vLANCAMENTOCXABCOHISIDANT",row || gx.fn.currentGridRowImpl(48),gx.O.AV83LancamentoCxaBcoHisIdAnt,0)},c2v:function(){gx.O.AV83LancamentoCxaBcoHisIdAnt=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vLANCAMENTOCXABCOHISIDANT",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOHISDESCRICAO",gxz:"ZV84LancamentoCxaBcoHisDescricao",gxold:"OV84LancamentoCxaBcoHisDescricao",gxvar:"AV84LancamentoCxaBcoHisDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV84LancamentoCxaBcoHisDescricao=Value},v2z:function(Value){gx.O.ZV84LancamentoCxaBcoHisDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vLANCAMENTOCXABCOHISDESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.AV84LancamentoCxaBcoHisDescricao,0)},c2v:function(){gx.O.AV84LancamentoCxaBcoHisDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vLANCAMENTOCXABCOHISDESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOVALORGRID",gxz:"ZV92LancamentoCxaBcoValorGrid",gxold:"OV92LancamentoCxaBcoValorGrid",gxvar:"AV92LancamentoCxaBcoValorGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV92LancamentoCxaBcoValorGrid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV92LancamentoCxaBcoValorGrid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vLANCAMENTOCXABCOVALORGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV92LancamentoCxaBcoValorGrid,2,',')},c2v:function(){gx.O.AV92LancamentoCxaBcoValorGrid=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vLANCAMENTOCXABCOVALORGRID",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCXABCOVALOR",gxz:"ZV78LancamentoCxaBcoValor",gxold:"OV78LancamentoCxaBcoValor",gxvar:"AV78LancamentoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78LancamentoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vLANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(48),gx.O.AV78LancamentoCxaBcoValor,2,',')},c2v:function(){gx.O.AV78LancamentoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vLANCAMENTOCXABCOVALOR",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPDEBCRE",gxz:"ZV70TpDebCre",gxold:"OV70TpDebCre",gxvar:"AV70TpDebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV70TpDebCre=Value},v2z:function(Value){gx.O.ZV70TpDebCre=Value},v2c:function(row){gx.fn.setGridControlValue("vTPDEBCRE",row || gx.fn.currentGridRowImpl(48),gx.O.AV70TpDebCre,0)},c2v:function(){gx.O.AV70TpDebCre=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPDEBCRE",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"decimal",len:12,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOGRID",gxz:"ZV75SaldoGrid",gxold:"OV75SaldoGrid",gxvar:"AV75SaldoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV75SaldoGrid=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75SaldoGrid=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vSALDOGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV75SaldoGrid,2,',')},c2v:function(){gx.O.AV75SaldoGrid=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vSALDOGRID",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPDEBCRESALDO",gxz:"ZV88TpDebCreSaldo",gxold:"OV88TpDebCreSaldo",gxvar:"AV88TpDebCreSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV88TpDebCreSaldo=Value},v2z:function(Value){gx.O.ZV88TpDebCreSaldo=Value},v2c:function(row){gx.fn.setGridControlValue("vTPDEBCRESALDO",row || gx.fn.currentGridRowImpl(48),gx.O.AV88TpDebCreSaldo,0)},c2v:function(){gx.O.AV88TpDebCreSaldo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPDEBCRESALDO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE7",grid:0};
   GXValidFnc[66]={fld:"TABLE8",grid:0};
   GXValidFnc[69]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[71]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[73]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[75]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[77]={fld:"IMAGE5",grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV73CaixaBancoEmpresaId",gxold:"OV73CaixaBancoEmpresaId",gxvar:"AV73CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV73CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV73CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV73CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPESQUISAR",gxz:"ZV91SnPesquisar",gxold:"OV91SnPesquisar",gxvar:"AV91SnPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91SnPesquisar=Value},v2z:function(Value){gx.O.ZV91SnPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV91SnPesquisar,0)},c2v:function(){gx.O.AV91SnPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   GXValidFnc[84]={fld:"BTNHELP",grid:0};
   GXValidFnc[85]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV68CaixaBancoId = 0 ;
   this.ZV68CaixaBancoId = 0 ;
   this.OV68CaixaBancoId = 0 ;
   this.AV69CaixaBancoDescricao = "" ;
   this.ZV69CaixaBancoDescricao = "" ;
   this.OV69CaixaBancoDescricao = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.ZV24DataInicial = gx.date.nullDate() ;
   this.OV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.ZV25DataFinal = gx.date.nullDate() ;
   this.OV25DataFinal = gx.date.nullDate() ;
   this.AV85SnTotalizaData = "" ;
   this.ZV85SnTotalizaData = "" ;
   this.OV85SnTotalizaData = "" ;
   this.AV71SaldoTela = 0 ;
   this.ZV71SaldoTela = 0 ;
   this.OV71SaldoTela = 0 ;
   this.AV72DescDebCre = "" ;
   this.ZV72DescDebCre = "" ;
   this.OV72DescDebCre = "" ;
   this.ZV87DataString = "" ;
   this.OV87DataString = "" ;
   this.ZV83LancamentoCxaBcoHisIdAnt = 0 ;
   this.OV83LancamentoCxaBcoHisIdAnt = 0 ;
   this.ZV84LancamentoCxaBcoHisDescricao = "" ;
   this.OV84LancamentoCxaBcoHisDescricao = "" ;
   this.ZV92LancamentoCxaBcoValorGrid = 0 ;
   this.OV92LancamentoCxaBcoValorGrid = 0 ;
   this.ZV78LancamentoCxaBcoValor = 0 ;
   this.OV78LancamentoCxaBcoValor = 0 ;
   this.ZV70TpDebCre = "" ;
   this.OV70TpDebCre = "" ;
   this.ZV75SaldoGrid = 0 ;
   this.OV75SaldoGrid = 0 ;
   this.ZV88TpDebCreSaldo = "" ;
   this.OV88TpDebCreSaldo = "" ;
   this.AV73CaixaBancoEmpresaId = "" ;
   this.ZV73CaixaBancoEmpresaId = "" ;
   this.OV73CaixaBancoEmpresaId = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV91SnPesquisar = "" ;
   this.ZV91SnPesquisar = "" ;
   this.OV91SnPesquisar = "" ;
   this.AV68CaixaBancoId = 0 ;
   this.AV69CaixaBancoDescricao = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.AV85SnTotalizaData = "" ;
   this.AV71SaldoTela = 0 ;
   this.AV72DescDebCre = "" ;
   this.AV73CaixaBancoEmpresaId = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV91SnPesquisar = "" ;
   this.AV87DataString = "" ;
   this.AV83LancamentoCxaBcoHisIdAnt = 0 ;
   this.AV84LancamentoCxaBcoHisDescricao = "" ;
   this.AV92LancamentoCxaBcoValorGrid = 0 ;
   this.AV78LancamentoCxaBcoValor = 0 ;
   this.AV70TpDebCre = "" ;
   this.AV75SaldoGrid = 0 ;
   this.AV88TpDebCreSaldo = "" ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1872LancamentoCxaBcoHisDescricao = "" ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1871LancamentoCxaBcoHisId = 0 ;
   this.A1870LancamentoCxaBcoHisEmpId = "" ;
   this.AV32TpErro = 0 ;
   this.AV67Saldo = 0 ;
   this.AV40DataAnterior = gx.date.nullDate() ;
   this.AV81LancamentoCxaBcoDataAnt = gx.date.nullDate() ;
   this.AV17EmpresaPadrao = "" ;
   this.AV79HistoricoCxaBcoEmpresaId = "" ;
   this.AV89ContLinhas = 0 ;
   this.AV77DataAnteriorStr = "" ;
   this.AV76Dia = 0 ;
   this.Events = {"e11ba2_client": ["'PROXIMO'", true] ,"e12ba2_client": ["'ANTERIOR'", true] ,"e14ba2_client": ["ENTER", true] ,"e13ba2_client": ["'FECHAR'", true] ,"e15ba2_client": ["'PRIMEIRO'", true] ,"e16ba2_client": ["'ULTIMO'", true] ,"e21ba2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'}],[{av:'gx.fn.getCtrlProperty("vDATASTRING","Visible")',ctrl:'vDATASTRING',prop:'Visible'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'}],[{av:'AV67Saldo',fld:'vSALDO'},{av:'AV74DebCre',fld:'vDEBCRE'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV72DescDebCre',fld:'vDESCDEBCRE'},{av:'gx.fn.getCtrlProperty("TABLESALDOANTERIOR","Visible")',ctrl:'TABLESALDOANTERIOR',prop:'Visible'},{av:'AV76Dia',fld:'vDIA'},{av:'AV77DataAnteriorStr',fld:'vDATAANTERIORSTR'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV59Data',fld:'vDATA'},{ctrl:'GRID',prop:'Rows'}],[{av:'gx.fn.getCtrlProperty("vDATASTRING","Visible")',ctrl:'vDATASTRING',prop:'Visible'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV82Erro',fld:'vERRO'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV74DebCre',fld:'vDEBCRE'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV72DescDebCre',fld:'vDESCDEBCRE'},{av:'gx.fn.getCtrlProperty("TABLESALDOANTERIOR","Visible")',ctrl:'TABLESALDOANTERIOR',prop:'Visible'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV76Dia',fld:'vDIA'},{av:'AV77DataAnteriorStr',fld:'vDATAANTERIORSTR'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'AV67Saldo',fld:'vSALDO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{ctrl:'GRID',prop:'Rows'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV84LancamentoCxaBcoHisDescricao',fld:'vLANCAMENTOCXABCOHISDESCRICAO'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV70TpDebCre',fld:'vTPDEBCRE'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV88TpDebCreSaldo',fld:'vTPDEBCRESALDO'},{av:'AV75SaldoGrid',fld:'vSALDOGRID'},{av:'AV92LancamentoCxaBcoValorGrid',fld:'vLANCAMENTOCXABCOVALORGRID'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV85SnTotalizaData',fld:'vSNTOTALIZADATA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV91SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV67Saldo',fld:'vSALDO'},{av:'AV73CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'AV68CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV40DataAnterior',fld:'vDATAANTERIOR'},{av:'AV71SaldoTela',fld:'vSALDOTELA'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV81LancamentoCxaBcoDataAnt',fld:'vLANCAMENTOCXABCODATAANT'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1871LancamentoCxaBcoHisId',fld:'LANCAMENTOCXABCOHISID'},{av:'A1928LancamentoCxaBcoEmpresaid',fld:'LANCAMENTOCXABCOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1868LancamentoCxaBcoCaiBanId',fld:'LANCAMENTOCXABCOCAIBANID'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'A1872LancamentoCxaBcoHisDescricao',fld:'LANCAMENTOCXABCOHISDESCRICAO'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'AV79HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV83LancamentoCxaBcoHisIdAnt',fld:'vLANCAMENTOCXABCOHISIDANT'},{av:'AV87DataString',fld:'vDATASTRING'},{av:'AV78LancamentoCxaBcoValor',fld:'vLANCAMENTOCXABCOVALOR'},{av:'AV89ContLinhas',fld:'vCONTLINHAS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90Resto',fld:'vRESTO'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_CAIXABANCOID", [13]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV32TpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV67Saldo", "vSALDO", 0, "decimal");
   this.setVCMap("AV40DataAnterior", "vDATAANTERIOR", 0, "date");
   this.setVCMap("AV81LancamentoCxaBcoDataAnt", "vLANCAMENTOCXABCODATAANT", 0, "date");
   this.setVCMap("A1930LancamentoCxaBcoData", "LANCAMENTOCXABCODATA", 0, "date");
   this.setVCMap("A1871LancamentoCxaBcoHisId", "LANCAMENTOCXABCOHISID", 0, "int");
   this.setVCMap("A1928LancamentoCxaBcoEmpresaid", "LANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1868LancamentoCxaBcoCaiBanId", "LANCAMENTOCXABCOCAIBANID", 0, "int");
   this.setVCMap("A1872LancamentoCxaBcoHisDescricao", "LANCAMENTOCXABCOHISDESCRICAO", 0, "svchar");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("AV79HistoricoCxaBcoEmpresaId", "vHISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV89ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("AV32TpErro", "vTPERRO", 0, "int");
   this.setVCMap("AV67Saldo", "vSALDO", 0, "decimal");
   this.setVCMap("AV40DataAnterior", "vDATAANTERIOR", 0, "date");
   this.setVCMap("AV81LancamentoCxaBcoDataAnt", "vLANCAMENTOCXABCODATAANT", 0, "date");
   this.setVCMap("A1930LancamentoCxaBcoData", "LANCAMENTOCXABCODATA", 0, "date");
   this.setVCMap("A1871LancamentoCxaBcoHisId", "LANCAMENTOCXABCOHISID", 0, "int");
   this.setVCMap("A1928LancamentoCxaBcoEmpresaid", "LANCAMENTOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1868LancamentoCxaBcoCaiBanId", "LANCAMENTOCXABCOCAIBANID", 0, "int");
   this.setVCMap("A1872LancamentoCxaBcoHisDescricao", "LANCAMENTOCXABCOHISDESCRICAO", 0, "svchar");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("AV79HistoricoCxaBcoEmpresaId", "vHISTORICOCXABCOEMPRESAID", 0, "char");
   this.setVCMap("AV89ContLinhas", "vCONTLINHAS", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar({rfrVar:"AV32TpErro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar({rfrVar:"AV67Saldo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV40DataAnterior"});
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar({rfrVar:"AV81LancamentoCxaBcoDataAnt"});
   GridContainer.addRefreshingVar({rfrVar:"A1930LancamentoCxaBcoData"});
   GridContainer.addRefreshingVar({rfrVar:"A1871LancamentoCxaBcoHisId"});
   GridContainer.addRefreshingVar({rfrVar:"A1928LancamentoCxaBcoEmpresaid"});
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A1868LancamentoCxaBcoCaiBanId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A1872LancamentoCxaBcoHisDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A1933LancamentoCxaBcoValor"});
   GridContainer.addRefreshingVar({rfrVar:"AV79HistoricoCxaBcoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV83LancamentoCxaBcoHisIdAnt", rfrProp:"Value", gxAttId:"Lancamentocxabcohisidant"});
   GridContainer.addRefreshingVar({rfrVar:"AV87DataString", rfrProp:"Value", gxAttId:"Datastring"});
   GridContainer.addRefreshingVar({rfrVar:"AV78LancamentoCxaBcoValor", rfrProp:"Value", gxAttId:"Lancamentocxabcovalor"});
   GridContainer.addRefreshingVar({rfrVar:"AV89ContLinhas"});
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasaldoporhistorico());
