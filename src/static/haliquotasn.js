/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:36.21
*/
gx.evt.autoSkip = false;
gx.define('haliquotasn', false, function () {
   this.ServerClass =  "haliquotasn" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.s132_client=function()
   {
      this.AV30TpErro = gx.num.trunc( 0 ,0) ;
      if ( ! (0==this.AV27AliquotaSNMes) && this.AV27AliquotaSNMes > 12 )
      {
         this.addMessage("Mês de referência inválido");
         gx.fn.usrSetFocus("vALIQUOTASNMES") ;
         this.AV30TpErro = gx.num.trunc( 1 ,0) ;
      }
      else
      {
         if ( ! (0==this.AV28AliquotaSNAno) && this.AV28AliquotaSNAno < 1900 )
         {
            this.addMessage("Ano de referência inválido");
            gx.fn.usrSetFocus("vALIQUOTASNANO") ;
            this.AV30TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e1110h2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1210h2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1710h2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1310h2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1410h2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1510h2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1610h2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2110h2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2210h2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2310h2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2410h2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2510h2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2610h2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,25,28,31,33,35,37,39,41,44,46,47,51,52,53,54,55,56,57,58,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"haliquotasn",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Mesano",51,"vMESANO","Mês/Ano","","MesAno","char",0,"px",7,7,"left",null,[],"Mesano","MesAno",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(7211,52,"ALIQUOTASNPERCENTUAL","","","AliquotaSNPercentual","decimal",0,"px",6,6,"right",null,[],7211,"AliquotaSNPercentual",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7212,53,"ALIQUOTASNVALOR","","","AliquotaSNValor","decimal",0,"px",22,22,"right",null,[],7212,"AliquotaSNValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e2110h2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e2210h2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e2310h2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(7216,57,"ALIQUOTASNMES","Mês","","AliquotaSNMes","int",0,"px",2,2,"right",null,[],7216,"AliquotaSNMes",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(7217,58,"ALIQUOTASNANO","Ano","","AliquotaSNAno","int",0,"px",4,4,"right",null,[],7217,"AliquotaSNAno",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE8",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vALIQUOTASNMES",gxz:"ZV27AliquotaSNMes",gxold:"OV27AliquotaSNMes",gxvar:"AV27AliquotaSNMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AliquotaSNMes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AliquotaSNMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vALIQUOTASNMES",gx.O.AV27AliquotaSNMes,0)},c2v:function(){gx.O.AV27AliquotaSNMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vALIQUOTASNMES",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vALIQUOTASNANO",gxz:"ZV28AliquotaSNAno",gxold:"OV28AliquotaSNAno",gxvar:"AV28AliquotaSNAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AliquotaSNAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AliquotaSNAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vALIQUOTASNANO",gx.O.AV28AliquotaSNAno,0)},c2v:function(){gx.O.AV28AliquotaSNAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vALIQUOTASNANO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[31]={fld:"IMAGE2",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"IMAGE1",grid:0};
   GXValidFnc[39]={fld:"BTNHELP",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMESANO",gxz:"ZV29MesAno",gxold:"OV29MesAno",gxvar:"AV29MesAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29MesAno=Value},v2z:function(Value){gx.O.ZV29MesAno=Value},v2c:function(row){gx.fn.setGridControlValue("vMESANO",row || gx.fn.currentGridRowImpl(50),gx.O.AV29MesAno,0)},c2v:function(){gx.O.AV29MesAno=this.val()},val:function(row){return gx.fn.getGridControlValue("vMESANO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNPERCENTUAL",gxz:"Z7211AliquotaSNPercentual",gxold:"O7211AliquotaSNPercentual",gxvar:"A7211AliquotaSNPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7211AliquotaSNPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7211AliquotaSNPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ALIQUOTASNPERCENTUAL",row || gx.fn.currentGridRowImpl(50),gx.O.A7211AliquotaSNPercentual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7211AliquotaSNPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ALIQUOTASNPERCENTUAL",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNVALOR",gxz:"Z7212AliquotaSNValor",gxold:"O7212AliquotaSNValor",gxvar:"A7212AliquotaSNValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7212AliquotaSNValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7212AliquotaSNValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ALIQUOTASNVALOR",row || gx.fn.currentGridRowImpl(50),gx.O.A7212AliquotaSNValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7212AliquotaSNValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ALIQUOTASNVALOR",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNMES",gxz:"Z7216AliquotaSNMes",gxold:"O7216AliquotaSNMes",gxvar:"A7216AliquotaSNMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7216AliquotaSNMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7216AliquotaSNMes=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTASNMES",row || gx.fn.currentGridRowImpl(50),gx.O.A7216AliquotaSNMes,0)},c2v:function(){gx.O.A7216AliquotaSNMes=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ALIQUOTASNMES",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNANO",gxz:"Z7217AliquotaSNAno",gxold:"O7217AliquotaSNAno",gxvar:"A7217AliquotaSNAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7217AliquotaSNAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7217AliquotaSNAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ALIQUOTASNANO",row || gx.fn.currentGridRowImpl(50),gx.O.A7217AliquotaSNAno,0)},c2v:function(){gx.O.A7217AliquotaSNAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ALIQUOTASNANO",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27AliquotaSNMes = 0 ;
   this.ZV27AliquotaSNMes = 0 ;
   this.OV27AliquotaSNMes = 0 ;
   this.AV28AliquotaSNAno = 0 ;
   this.ZV28AliquotaSNAno = 0 ;
   this.OV28AliquotaSNAno = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV29MesAno = "" ;
   this.OV29MesAno = "" ;
   this.Z7211AliquotaSNPercentual = 0 ;
   this.O7211AliquotaSNPercentual = 0 ;
   this.Z7212AliquotaSNValor = 0 ;
   this.O7212AliquotaSNValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z7216AliquotaSNMes = 0 ;
   this.O7216AliquotaSNMes = 0 ;
   this.Z7217AliquotaSNAno = 0 ;
   this.O7217AliquotaSNAno = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27AliquotaSNMes = 0 ;
   this.AV28AliquotaSNAno = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A7215AliquotaSNEmpresaId = "" ;
   this.AV29MesAno = "" ;
   this.A7211AliquotaSNPercentual = 0 ;
   this.A7212AliquotaSNValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A7216AliquotaSNMes = 0 ;
   this.A7217AliquotaSNAno = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV30TpErro = 0 ;
   this.Events = {"e1110h2_client": ["'ANTERIOR'", true] ,"e1210h2_client": ["'PROXIMO'", true] ,"e1710h2_client": ["VPAGINA.CLICK", true] ,"e1310h2_client": ["'NOVO'", true] ,"e1410h2_client": ["'FECHAR'", true] ,"e1510h2_client": ["'IMPRIMIR'", true] ,"e1610h2_client": ["'PROCURAR'", true] ,"e2110h2_client": ["'ALTERAR'", true] ,"e2210h2_client": ["'EXCLUIR'", true] ,"e2310h2_client": ["'CONSULTAR'", true] ,"e2410h2_client": ["'ATUALIZAPAGINA'", true] ,"e2510h2_client": ["ENTER", true] ,"e2610h2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'}],[{ctrl:'ALIQUOTASNPERCENTUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALIQUOTASNPERCENTUAL","Title")',ctrl:'ALIQUOTASNPERCENTUAL',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ALIQUOTASNVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALIQUOTASNVALOR","Title")',ctrl:'ALIQUOTASNVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'}],[{av:'AV31MesAux',fld:'vMESAUX'},{av:'AV32AnoAux',fld:'vANOAUX'},{av:'AV29MesAno',fld:'vMESANO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'}],[{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'}],[{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'}],[{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV28AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A7216AliquotaSNMes',fld:'ALIQUOTASNMES'},{av:'A7217AliquotaSNAno',fld:'ALIQUOTASNANO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A7216AliquotaSNMes", rfrProp:"Value", gxAttId:"7216"});
   GridContainer.addRefreshingVar({rfrVar:"A7217AliquotaSNAno", rfrProp:"Value", gxAttId:"7217"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new haliquotasn());
