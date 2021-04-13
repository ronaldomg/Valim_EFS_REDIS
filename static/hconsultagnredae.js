/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:57:33.53
*/
gx.evt.autoSkip = false;
gx.define('hconsultagnredae', false, function () {
   this.ServerClass =  "hconsultagnredae" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV22GNREDAEEmpresaId=gx.fn.getControlValue("vGNREDAEEMPRESAID") ;
      this.AV21GNREDAEIdOut=gx.fn.getIntegerValue("vGNREDAEIDOUT",'.') ;
   };
   this.Validv_Gnredaeuffavorecido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGNREDAEUFFAVORECIDO");
         this.AnyError  = 0;
         if ( ! ( this.AV18GNREDAEUFFavorecido == "" || this.AV18GNREDAEUFFavorecido == "AC" || this.AV18GNREDAEUFFavorecido == "AL" || this.AV18GNREDAEUFFavorecido == "AP" || this.AV18GNREDAEUFFavorecido == "AM" || this.AV18GNREDAEUFFavorecido == "BA" || this.AV18GNREDAEUFFavorecido == "CE" || this.AV18GNREDAEUFFavorecido == "DF" || this.AV18GNREDAEUFFavorecido == "ES" || this.AV18GNREDAEUFFavorecido == "GO" || this.AV18GNREDAEUFFavorecido == "MA" || this.AV18GNREDAEUFFavorecido == "MT" || this.AV18GNREDAEUFFavorecido == "MS" || this.AV18GNREDAEUFFavorecido == "MG" || this.AV18GNREDAEUFFavorecido == "PA" || this.AV18GNREDAEUFFavorecido == "PB" || this.AV18GNREDAEUFFavorecido == "PR" || this.AV18GNREDAEUFFavorecido == "PE" || this.AV18GNREDAEUFFavorecido == "PI" || this.AV18GNREDAEUFFavorecido == "RJ" || this.AV18GNREDAEUFFavorecido == "RN" || this.AV18GNREDAEUFFavorecido == "RS" || this.AV18GNREDAEUFFavorecido == "RO" || this.AV18GNREDAEUFFavorecido == "RR" || this.AV18GNREDAEUFFavorecido == "SC" || this.AV18GNREDAEUFFavorecido == "SP" || this.AV18GNREDAEUFFavorecido == "SE" || this.AV18GNREDAEUFFavorecido == "TO" || this.AV18GNREDAEUFFavorecido == "EX" || (""==this.AV18GNREDAEUFFavorecido) ) )
         {
            try {
               gxballoon.setError("Campo GNREDAEUFFavorecido fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e18vc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11vc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12vc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13vc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14vc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15vc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16vc2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20vc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22vc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,36,38,46,47,48,49,50,51,52,53,59,62,65,67,69,71,73,74,75,76,77,78];
   this.GXLastCtrlId =78;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",45,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultagnredae",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5386,46,"GNREDAEEMPRESAID","Empresa da GNRE/DAE","","GNREDAEEmpresaId","char",0,"px",10,10,"left",null,[],5386,"GNREDAEEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4681,47,"GNREDAEID","","","GNREDAEid","int",0,"px",7,7,"right",null,[],4681,"GNREDAEid",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(5385,48,"GNREDAETIPO","","GNREDAETipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(5388,49,"GNREDAEUFFAVORECIDO","","GNREDAEUFFavorecido","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5398,50,"GNREDAENODOCARRECADACAO","","","GNREDAENoDocArrecadacao","char",0,"px",20,20,"left",null,[],5398,"GNREDAENoDocArrecadacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5392,51,"GNREDAEVALOR","","","GNREDAEValor","decimal",0,"px",22,22,"right",null,[],5392,"GNREDAEValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5393,52,"GNREDAEVENCIMENTO","","","GNREDAEVencimento","date",0,"px",10,10,"right",null,[],5393,"GNREDAEVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5395,53,"GNREDAEDATAPAGAMENTO","","","GNREDAEDataPagamento","date",0,"px",10,10,"right",null,[],5395,"GNREDAEDataPagamento",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEIDFILTRO",gxz:"ZV24GNREDAEIdFiltro",gxold:"OV24GNREDAEIdFiltro",gxvar:"AV24GNREDAEIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24GNREDAEIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24GNREDAEIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEIDFILTRO",gx.O.AV24GNREDAEIdFiltro,0)},c2v:function(){gx.O.AV24GNREDAEIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGNREDAEIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTDOCARREC", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAENODOCARRECADACAO",gxz:"ZV17GNREDAENoDocArrecadacao",gxold:"OV17GNREDAENoDocArrecadacao",gxvar:"AV17GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.ZV17GNREDAENoDocArrecadacao=Value},v2c:function(){gx.fn.setControlValue("vGNREDAENODOCARRECADACAO",gx.O.AV17GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.AV17GNREDAENoDocArrecadacao=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAENODOCARRECADACAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAETIPOFILTRO",gxz:"ZV16GNREDAETipoFiltro",gxold:"OV16GNREDAETipoFiltro",gxvar:"AV16GNREDAETipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16GNREDAETipoFiltro=Value},v2z:function(Value){gx.O.ZV16GNREDAETipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vGNREDAETIPOFILTRO",gx.O.AV16GNREDAETipoFiltro)},c2v:function(){gx.O.AV16GNREDAETipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAETIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTVENC", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLERANGEVENCIMENTO",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEVENCIMENTOINI",gxz:"ZV19GNREDAEVencimentoIni",gxold:"OV19GNREDAEVencimentoIni",gxvar:"AV19GNREDAEVencimentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19GNREDAEVencimentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19GNREDAEVencimentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEVENCIMENTOINI",gx.O.AV19GNREDAEVencimentoIni,0)},c2v:function(){gx.O.AV19GNREDAEVencimentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEVENCIMENTOINI")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TXTA", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEVENCIMENTOFIN",gxz:"ZV20GNREDAEVencimentoFin",gxold:"OV20GNREDAEVencimentoFin",gxvar:"AV20GNREDAEVencimentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20GNREDAEVencimentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20GNREDAEVencimentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEVENCIMENTOFIN",gx.O.AV20GNREDAEVencimentoFin,0)},c2v:function(){gx.O.AV20GNREDAEVencimentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEVENCIMENTOFIN")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TXTUFFAV", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gnredaeuffavorecido,isvalid:null,rgrid:[this.GridContainer],fld:"vGNREDAEUFFAVORECIDO",gxz:"ZV18GNREDAEUFFavorecido",gxold:"OV18GNREDAEUFFavorecido",gxvar:"AV18GNREDAEUFFavorecido",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.ZV18GNREDAEUFFavorecido=Value},v2c:function(){gx.fn.setComboBoxValue("vGNREDAEUFFAVORECIDO",gx.O.AV18GNREDAEUFFavorecido)},c2v:function(){gx.O.AV18GNREDAEUFFavorecido=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAEUFFAVORECIDO")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEEMPRESAID",gxz:"Z5386GNREDAEEmpresaId",gxold:"O5386GNREDAEEmpresaId",gxvar:"A5386GNREDAEEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5386GNREDAEEmpresaId=Value},v2z:function(Value){gx.O.Z5386GNREDAEEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(45),gx.O.A5386GNREDAEEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5386GNREDAEEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEEMPRESAID",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEID",gxz:"Z4681GNREDAEid",gxold:"O4681GNREDAEid",gxvar:"A4681GNREDAEid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4681GNREDAEid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4681GNREDAEid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEID",row || gx.fn.currentGridRowImpl(45),gx.O.A4681GNREDAEid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4681GNREDAEid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GNREDAEID",row || gx.fn.currentGridRowImpl(45),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAETIPO",gxz:"Z5385GNREDAETipo",gxold:"O5385GNREDAETipo",gxvar:"A5385GNREDAETipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5385GNREDAETipo=Value},v2z:function(Value){gx.O.Z5385GNREDAETipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(45),gx.O.A5385GNREDAETipo)},c2v:function(){gx.O.A5385GNREDAETipo=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAETIPO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEUFFAVORECIDO",gxz:"Z5388GNREDAEUFFavorecido",gxold:"O5388GNREDAEUFFavorecido",gxvar:"A5388GNREDAEUFFavorecido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5388GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.Z5388GNREDAEUFFavorecido=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(45),gx.O.A5388GNREDAEUFFavorecido);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5388GNREDAEUFFavorecido=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAEUFFAVORECIDO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAENODOCARRECADACAO",gxz:"Z5398GNREDAENoDocArrecadacao",gxold:"O5398GNREDAENoDocArrecadacao",gxvar:"A5398GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5398GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.Z5398GNREDAENoDocArrecadacao=Value},v2c:function(row){gx.fn.setGridControlValue("GNREDAENODOCARRECADACAO",row || gx.fn.currentGridRowImpl(45),gx.O.A5398GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.A5398GNREDAENoDocArrecadacao=this.val()},val:function(row){return gx.fn.getGridControlValue("GNREDAENODOCARRECADACAO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEVALOR",gxz:"Z5392GNREDAEValor",gxold:"O5392GNREDAEValor",gxvar:"A5392GNREDAEValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5392GNREDAEValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5392GNREDAEValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("GNREDAEVALOR",row || gx.fn.currentGridRowImpl(45),gx.O.A5392GNREDAEValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5392GNREDAEValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("GNREDAEVALOR",row || gx.fn.currentGridRowImpl(45),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEVENCIMENTO",gxz:"Z5393GNREDAEVencimento",gxold:"O5393GNREDAEVencimento",gxvar:"A5393GNREDAEVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(45),gx.O.A5393GNREDAEVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GNREDAEVENCIMENTO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEDATAPAGAMENTO",gxz:"Z5395GNREDAEDataPagamento",gxold:"O5395GNREDAEDataPagamento",gxvar:"A5395GNREDAEDataPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GNREDAEDATAPAGAMENTO",row || gx.fn.currentGridRowImpl(45),gx.O.A5395GNREDAEDataPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GNREDAEDATAPAGAMENTO",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLENAV",grid:0};
   GXValidFnc[62]={fld:"IMGADD",grid:0};
   GXValidFnc[65]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[67]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[69]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[71]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[73]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAEIDIN",gxz:"ZV23GNREDAEIdIn",gxold:"OV23GNREDAEIdIn",gxvar:"AV23GNREDAEIdIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23GNREDAEIdIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23GNREDAEIdIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEIDIN",gx.O.AV23GNREDAEIdIn,0)},c2v:function(){gx.O.AV23GNREDAEIdIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGNREDAEIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNERRO",gxz:"ZV25SnErro",gxold:"OV25SnErro",gxvar:"AV25SnErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SnErro=Value},v2z:function(Value){gx.O.ZV25SnErro=Value},v2c:function(){gx.fn.setControlValue("vSNERRO",gx.O.AV25SnErro,0)},c2v:function(){gx.O.AV25SnErro=this.val()},val:function(){return gx.fn.getControlValue("vSNERRO")},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV24GNREDAEIdFiltro = 0 ;
   this.ZV24GNREDAEIdFiltro = 0 ;
   this.OV24GNREDAEIdFiltro = 0 ;
   this.AV17GNREDAENoDocArrecadacao = "" ;
   this.ZV17GNREDAENoDocArrecadacao = "" ;
   this.OV17GNREDAENoDocArrecadacao = "" ;
   this.AV16GNREDAETipoFiltro = "" ;
   this.ZV16GNREDAETipoFiltro = "" ;
   this.OV16GNREDAETipoFiltro = "" ;
   this.AV19GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.ZV19GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.OV19GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.AV20GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.ZV20GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.OV20GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.AV18GNREDAEUFFavorecido = "" ;
   this.ZV18GNREDAEUFFavorecido = "" ;
   this.OV18GNREDAEUFFavorecido = "" ;
   this.Z5386GNREDAEEmpresaId = "" ;
   this.O5386GNREDAEEmpresaId = "" ;
   this.Z4681GNREDAEid = 0 ;
   this.O4681GNREDAEid = 0 ;
   this.Z5385GNREDAETipo = "" ;
   this.O5385GNREDAETipo = "" ;
   this.Z5388GNREDAEUFFavorecido = "" ;
   this.O5388GNREDAEUFFavorecido = "" ;
   this.Z5398GNREDAENoDocArrecadacao = "" ;
   this.O5398GNREDAENoDocArrecadacao = "" ;
   this.Z5392GNREDAEValor = 0 ;
   this.O5392GNREDAEValor = 0 ;
   this.Z5393GNREDAEVencimento = gx.date.nullDate() ;
   this.O5393GNREDAEVencimento = gx.date.nullDate() ;
   this.Z5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.O5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.AV23GNREDAEIdIn = 0 ;
   this.ZV23GNREDAEIdIn = 0 ;
   this.OV23GNREDAEIdIn = 0 ;
   this.AV25SnErro = "" ;
   this.ZV25SnErro = "" ;
   this.OV25SnErro = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV24GNREDAEIdFiltro = 0 ;
   this.AV17GNREDAENoDocArrecadacao = "" ;
   this.AV16GNREDAETipoFiltro = "" ;
   this.AV19GNREDAEVencimentoIni = gx.date.nullDate() ;
   this.AV20GNREDAEVencimentoFin = gx.date.nullDate() ;
   this.AV18GNREDAEUFFavorecido = "" ;
   this.AV23GNREDAEIdIn = 0 ;
   this.AV25SnErro = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21GNREDAEIdOut = 0 ;
   this.A5386GNREDAEEmpresaId = "" ;
   this.A4681GNREDAEid = 0 ;
   this.A5385GNREDAETipo = "" ;
   this.A5388GNREDAEUFFavorecido = "" ;
   this.A5398GNREDAENoDocArrecadacao = "" ;
   this.A5392GNREDAEValor = 0 ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.A5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.AV22GNREDAEEmpresaId = "" ;
   this.Events = {"e18vc2_client": ["ENTER", true] ,"e11vc2_client": ["'GXM_FIRST'", true] ,"e12vc2_client": ["'GXM_PREVIOUS'", true] ,"e13vc2_client": ["'GXM_NEXT'", true] ,"e14vc2_client": ["'GXM_LAST'", true] ,"e15vc2_client": ["'PROCURAR'", true] ,"e16vc2_client": ["'NOVO'", true] ,"e20vc2_client": ["'ATUALIZAPAGINA'", true] ,"e22vc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'GNREDAETIPO'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'GNREDAEUFFAVORECIDO'},{ctrl:'GNREDAENODOCARRECADACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAENODOCARRECADACAO","Title")',ctrl:'GNREDAENODOCARRECADACAO',prop:'Title'},{ctrl:'GNREDAEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEVALOR","Title")',ctrl:'GNREDAEVALOR',prop:'Title'},{ctrl:'GNREDAEVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEVENCIMENTO","Title")',ctrl:'GNREDAEVENCIMENTO',prop:'Title'},{ctrl:'GNREDAEDATAPAGAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEDATAPAGAMENTO","Title")',ctrl:'GNREDAEDATAPAGAMENTO',prop:'Title'},{ctrl:'GNREDAEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GNREDAEID","Title")',ctrl:'GNREDAEID',prop:'Title'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4681GNREDAEid',fld:'GNREDAEID'}],[{av:'AV21GNREDAEIdOut',fld:'vGNREDAEIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'}],[{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24GNREDAEIdFiltro',fld:'vGNREDAEIDFILTRO'},{av:'AV17GNREDAENoDocArrecadacao',fld:'vGNREDAENODOCARRECADACAO'},{av:'AV16GNREDAETipoFiltro',fld:'vGNREDAETIPOFILTRO'},{av:'AV19GNREDAEVencimentoIni',fld:'vGNREDAEVENCIMENTOINI'},{av:'AV20GNREDAEVencimentoFin',fld:'vGNREDAEVENCIMENTOFIN'},{av:'AV18GNREDAEUFFavorecido',fld:'vGNREDAEUFFAVORECIDO'},{av:'AV25SnErro',fld:'vSNERRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID'}],[]];
   this.setVCMap("AV22GNREDAEEmpresaId", "vGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("AV21GNREDAEIdOut", "vGNREDAEIDOUT", 0, "int");
   this.setVCMap("AV22GNREDAEEmpresaId", "vGNREDAEEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV22GNREDAEEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultagnredae());
