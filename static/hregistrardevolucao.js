/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:53:6.73
*/
gx.evt.autoSkip = false;
gx.define('hregistrardevolucao', false, function () {
   this.ServerClass =  "hregistrardevolucao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV21MovimentacaoId=gx.fn.getIntegerValue("vMOVIMENTACAOID",'.') ;
   };
   this.e113m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e133m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153m1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,18,21,23,26,28,31,33,36,38,41,43,51];
   this.GXLastCtrlId =51;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOID",gxz:"ZV31AcervoId",gxold:"OV31AcervoId",gxvar:"AV31AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV31AcervoId,0)},c2v:function(){gx.O.AV31AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOTITULO",gxz:"ZV32AcervoTitulo",gxold:"OV32AcervoTitulo",gxvar:"AV32AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AcervoTitulo=Value},v2z:function(Value){gx.O.ZV32AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV32AcervoTitulo,0)},c2v:function(){gx.O.AV32AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAODATAEMPRESTIMO",gxz:"ZV23MovimentacaoDataEmprestimo",gxold:"OV23MovimentacaoDataEmprestimo",gxvar:"AV23MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATAEMPRESTIMO",gx.O.AV23MovimentacaoDataEmprestimo,0)},c2v:function(){gx.O.AV23MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATAEMPRESTIMO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOPREVISAODEVOLUCAO",gxz:"ZV30MovimentacaoPrevisaoDevolucao",gxold:"OV30MovimentacaoPrevisaoDevolucao",gxvar:"AV30MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO",gx.O.AV30MovimentacaoPrevisaoDevolucao,0)},c2v:function(){gx.O.AV30MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAODATADEVOLUCAO",gxz:"ZV25MovimentacaoDataDevolucao",gxold:"OV25MovimentacaoDataDevolucao",gxvar:"AV25MovimentacaoDataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATADEVOLUCAO",gx.O.AV25MovimentacaoDataDevolucao,0)},c2v:function(){gx.O.AV25MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATADEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOTIPO",gxz:"ZV33MovimentacaoTipo",gxold:"OV33MovimentacaoTipo",gxvar:"AV33MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV33MovimentacaoTipo=Value},v2z:function(Value){gx.O.ZV33MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("vMOVIMENTACAOTIPO",gx.O.AV33MovimentacaoTipo)},c2v:function(){gx.O.AV33MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTMULTA", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORMULTA",gxz:"ZV27ValorMulta",gxold:"OV27ValorMulta",gxvar:"AV27ValorMulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ValorMulta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27ValorMulta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORMULTA",gx.O.AV27ValorMulta,2,',')},c2v:function(){gx.O.AV27ValorMulta=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORMULTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"JSDATA", format:2,grid:0};
   this.AV31AcervoId = 0 ;
   this.ZV31AcervoId = 0 ;
   this.OV31AcervoId = 0 ;
   this.AV32AcervoTitulo = "" ;
   this.ZV32AcervoTitulo = "" ;
   this.OV32AcervoTitulo = "" ;
   this.AV23MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.ZV23MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.OV23MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV30MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.ZV30MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.OV30MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV25MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.ZV25MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.OV25MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.AV33MovimentacaoTipo = "" ;
   this.ZV33MovimentacaoTipo = "" ;
   this.OV33MovimentacaoTipo = "" ;
   this.AV27ValorMulta = 0 ;
   this.ZV27ValorMulta = 0 ;
   this.OV27ValorMulta = 0 ;
   this.AV31AcervoId = 0 ;
   this.AV32AcervoTitulo = "" ;
   this.AV23MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV30MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV25MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.AV33MovimentacaoTipo = "" ;
   this.AV27ValorMulta = 0 ;
   this.AV21MovimentacaoId = 0 ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A104MovimentacaoId = 0 ;
   this.A39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A108MovimentacaoTipo = "" ;
   this.A3082AcervoEmpresaId = "" ;
   this.Events = {"e113m2_client": ["'FECHAR'", true] ,"e133m2_client": ["ENTER", true] ,"e153m1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV25MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV23MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV21MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV29MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'}],[{av:'AV29MovimentacaoEmpresaId',fld:'vMOVIMENTACAOEMPRESAID'},{av:'AV21MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV25MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'}]];
   this.EvtParms["LOAD"] = [[{av:'AV30MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV21MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true}],[{av:'AV27ValorMulta',fld:'vVALORMULTA'},{av:'gx.fn.getCtrlProperty("TXTMULTA","Visible")',ctrl:'TXTMULTA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vVALORMULTA","Visible")',ctrl:'vVALORMULTA',prop:'Visible'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21MovimentacaoId", "vMOVIMENTACAOID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrardevolucao());
