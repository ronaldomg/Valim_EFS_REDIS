/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:2.74
*/
gx.evt.autoSkip = false;
gx.define('halteravolumelacre', false, function () {
   this.ServerClass =  "halteravolumelacre" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
      this.AV14SaidaId=gx.fn.getIntegerValue("vSAIDAID",'.') ;
      this.AV16SaidaVolumeTranspSeq=gx.fn.getIntegerValue("vSAIDAVOLUMETRANSPSEQ",'.') ;
      this.AV13Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPQTDE","Enabled", 0 );
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPESPECIE","Enabled", 0 );
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPMARCA","Enabled", 0 );
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPNUMERO","Enabled", 0 );
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPPESOLIQ","Enabled", 0 );
      gx.fn.setCtrlProperty("vSAIDAVOLUMETRANSPPESOBRUTO","Enabled", 0 );
   };
   this.e1112p2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1212p2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1312p2_client=function()
   {
      this.executeServerEvent("'LACRES'", true, null, false, false);
   };
   this.e1512p2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e1612p2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e1812p2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,16,18,23,25,30,32,37,39,41,43,48,51,54,56,58,59,60,61,62,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"halteravolumelacre",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6311,58,"SAIDALACRESSEQ","Sequência","","SaidaLacresSeq","int",0,"px",2,2,"right",null,[],6311,"SaidaLacresSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6292,59,"SAIDALACRESNUMERO","Número","","SaidaLacresNumero","svchar",0,"px",60,60,"left",null,[],6292,"SaidaLacresNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalterar","vBMPALTERAR",60,0,"px",17,"px","e1512p2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",61,0,"px",17,"px","e1612p2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPQTDE",gxz:"ZV17SaidaVolumeTranspQtde",gxold:"OV17SaidaVolumeTranspQtde",gxvar:"AV17SaidaVolumeTranspQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaVolumeTranspQtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaVolumeTranspQtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAVOLUMETRANSPQTDE",gx.O.AV17SaidaVolumeTranspQtde,0)},c2v:function(){gx.O.AV17SaidaVolumeTranspQtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAVOLUMETRANSPQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPESPECIE",gxz:"ZV18SaidaVolumeTranspEspecie",gxold:"OV18SaidaVolumeTranspEspecie",gxvar:"AV18SaidaVolumeTranspEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SaidaVolumeTranspEspecie=Value},v2z:function(Value){gx.O.ZV18SaidaVolumeTranspEspecie=Value},v2c:function(){gx.fn.setControlValue("vSAIDAVOLUMETRANSPESPECIE",gx.O.AV18SaidaVolumeTranspEspecie,0)},c2v:function(){gx.O.AV18SaidaVolumeTranspEspecie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVOLUMETRANSPESPECIE")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPMARCA",gxz:"ZV19SaidaVolumeTranspMarca",gxold:"OV19SaidaVolumeTranspMarca",gxvar:"AV19SaidaVolumeTranspMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SaidaVolumeTranspMarca=Value},v2z:function(Value){gx.O.ZV19SaidaVolumeTranspMarca=Value},v2c:function(){gx.fn.setControlValue("vSAIDAVOLUMETRANSPMARCA",gx.O.AV19SaidaVolumeTranspMarca,0)},c2v:function(){gx.O.AV19SaidaVolumeTranspMarca=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVOLUMETRANSPMARCA")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPNUMERO",gxz:"ZV20SaidaVolumeTranspNumero",gxold:"OV20SaidaVolumeTranspNumero",gxvar:"AV20SaidaVolumeTranspNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SaidaVolumeTranspNumero=Value},v2z:function(Value){gx.O.ZV20SaidaVolumeTranspNumero=Value},v2c:function(){gx.fn.setControlValue("vSAIDAVOLUMETRANSPNUMERO",gx.O.AV20SaidaVolumeTranspNumero,0)},c2v:function(){gx.O.AV20SaidaVolumeTranspNumero=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAVOLUMETRANSPNUMERO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPPESOLIQ",gxz:"ZV21SaidaVolumeTranspPesoLiq",gxold:"OV21SaidaVolumeTranspPesoLiq",gxvar:"AV21SaidaVolumeTranspPesoLiq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SaidaVolumeTranspPesoLiq=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21SaidaVolumeTranspPesoLiq=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSAIDAVOLUMETRANSPPESOLIQ",gx.O.AV21SaidaVolumeTranspPesoLiq,3,',')},c2v:function(){gx.O.AV21SaidaVolumeTranspPesoLiq=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVOLUMETRANSPPESOLIQ",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVOLUMETRANSPPESOBRUTO",gxz:"ZV22SaidaVolumeTranspPesoBruto",gxold:"OV22SaidaVolumeTranspPesoBruto",gxvar:"AV22SaidaVolumeTranspPesoBruto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22SaidaVolumeTranspPesoBruto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22SaidaVolumeTranspPesoBruto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSAIDAVOLUMETRANSPPESOBRUTO",gx.O.AV22SaidaVolumeTranspPesoBruto,3,',')},c2v:function(){gx.O.AV22SaidaVolumeTranspPesoBruto=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVOLUMETRANSPPESOBRUTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"ADDVENDEDOR",grid:0};
   GXValidFnc[56]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALACRESSEQ",gxz:"Z6311SaidaLacresSeq",gxold:"O6311SaidaLacresSeq",gxvar:"A6311SaidaLacresSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6311SaidaLacresSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6311SaidaLacresSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDALACRESSEQ",row || gx.fn.currentGridRowImpl(57),gx.O.A6311SaidaLacresSeq,0)},c2v:function(){gx.O.A6311SaidaLacresSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDALACRESSEQ",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALACRESNUMERO",gxz:"Z6292SaidaLacresNumero",gxold:"O6292SaidaLacresNumero",gxvar:"A6292SaidaLacresNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6292SaidaLacresNumero=Value},v2z:function(Value){gx.O.Z6292SaidaLacresNumero=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDALACRESNUMERO",row || gx.fn.currentGridRowImpl(57),gx.O.A6292SaidaLacresNumero,0)},c2v:function(){gx.O.A6292SaidaLacresNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDALACRESNUMERO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALTERAR",gxz:"ZV26bmpAlterar",gxold:"OV26bmpAlterar",gxvar:"AV26bmpAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpAlterar=Value},v2z:function(Value){gx.O.ZV26bmpAlterar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(57),gx.O.AV26bmpAlterar,gx.O.AV40Bmpalterar_GXI)},c2v:function(){gx.O.AV40Bmpalterar_GXI=this.val_GXI();gx.O.AV26bmpAlterar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALTERAR",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALTERAR_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV40Bmpalterar_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV27bmpExcluir",gxold:"OV27bmpExcluir",gxvar:"AV27bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpExcluir=Value},v2z:function(Value){gx.O.ZV27bmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(57),gx.O.AV27bmpExcluir,gx.O.AV41Bmpexcluir_GXI)},c2v:function(){gx.O.AV41Bmpexcluir_GXI=this.val_GXI();gx.O.AV27bmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV41Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[62]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[70]={fld:"JS", format:2,grid:0};
   this.AV17SaidaVolumeTranspQtde = 0 ;
   this.ZV17SaidaVolumeTranspQtde = 0 ;
   this.OV17SaidaVolumeTranspQtde = 0 ;
   this.AV18SaidaVolumeTranspEspecie = "" ;
   this.ZV18SaidaVolumeTranspEspecie = "" ;
   this.OV18SaidaVolumeTranspEspecie = "" ;
   this.AV19SaidaVolumeTranspMarca = "" ;
   this.ZV19SaidaVolumeTranspMarca = "" ;
   this.OV19SaidaVolumeTranspMarca = "" ;
   this.AV20SaidaVolumeTranspNumero = "" ;
   this.ZV20SaidaVolumeTranspNumero = "" ;
   this.OV20SaidaVolumeTranspNumero = "" ;
   this.AV21SaidaVolumeTranspPesoLiq = 0 ;
   this.ZV21SaidaVolumeTranspPesoLiq = 0 ;
   this.OV21SaidaVolumeTranspPesoLiq = 0 ;
   this.AV22SaidaVolumeTranspPesoBruto = 0 ;
   this.ZV22SaidaVolumeTranspPesoBruto = 0 ;
   this.OV22SaidaVolumeTranspPesoBruto = 0 ;
   this.Z6311SaidaLacresSeq = 0 ;
   this.O6311SaidaLacresSeq = 0 ;
   this.Z6292SaidaLacresNumero = "" ;
   this.O6292SaidaLacresNumero = "" ;
   this.ZV26bmpAlterar = "" ;
   this.OV26bmpAlterar = "" ;
   this.ZV27bmpExcluir = "" ;
   this.OV27bmpExcluir = "" ;
   this.AV17SaidaVolumeTranspQtde = 0 ;
   this.AV18SaidaVolumeTranspEspecie = "" ;
   this.AV19SaidaVolumeTranspMarca = "" ;
   this.AV20SaidaVolumeTranspNumero = "" ;
   this.AV21SaidaVolumeTranspPesoLiq = 0 ;
   this.AV22SaidaVolumeTranspPesoBruto = 0 ;
   this.AV15SaidaEmpresaId = "" ;
   this.AV14SaidaId = 0 ;
   this.AV16SaidaVolumeTranspSeq = 0 ;
   this.AV13Modo = "" ;
   this.A6310SaidaVolumeTranspSeq = 0 ;
   this.A4307SaidaId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A6311SaidaLacresSeq = 0 ;
   this.A6292SaidaLacresNumero = "" ;
   this.AV26bmpAlterar = "" ;
   this.AV27bmpExcluir = "" ;
   this.A6284SaidaVolumeTranspQtde = 0 ;
   this.A6285SaidaVolumeTranspEspecie = "" ;
   this.A6286SaidaVolumeTranspMarca = "" ;
   this.A6287SaidaVolumeTranspNumero = "" ;
   this.A6288SaidaVolumeTranspPesoLiq = 0 ;
   this.A6289SaidaVolumeTranspPesoBruto = 0 ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5601TransacaoSaidaQtdeVolume = 0 ;
   this.A5603TransacaoSaidaEspecieVolume = "" ;
   this.A5602TransacaoSaidaMarcaVolume = "" ;
   this.A5604TransacaoSaidaNumeroVolume = "" ;
   this.A5605TransacaoSaidaPesoLiq = 0 ;
   this.A5606TransacaoSaidaPesoBruto = 0 ;
   this.A6397SaidaTransacaoEmpresa = "" ;
   this.A6398SaidaTransacaoCodigo = "" ;
   this.Events = {"e1112p2_client": ["ENTER", true] ,"e1212p2_client": ["'FECHAR'", true] ,"e1312p2_client": ["'LACRES'", true] ,"e1512p2_client": ["'ALTERAR'", true] ,"e1612p2_client": ["'EXCLUIR'", true] ,"e1812p2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV26bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV27bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV13Modo',fld:'vMODO'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV17SaidaVolumeTranspQtde',fld:'vSAIDAVOLUMETRANSPQTDE'},{av:'AV18SaidaVolumeTranspEspecie',fld:'vSAIDAVOLUMETRANSPESPECIE'},{av:'AV19SaidaVolumeTranspMarca',fld:'vSAIDAVOLUMETRANSPMARCA'},{av:'AV20SaidaVolumeTranspNumero',fld:'vSAIDAVOLUMETRANSPNUMERO'},{av:'AV21SaidaVolumeTranspPesoLiq',fld:'vSAIDAVOLUMETRANSPPESOLIQ'},{av:'AV22SaidaVolumeTranspPesoBruto',fld:'vSAIDAVOLUMETRANSPPESOBRUTO'},{av:'AV25SaidaLacresNumero',fld:'vSAIDALACRESNUMERO'},{av:'AV30SaidaLacresSeq',fld:'vSAIDALACRESSEQ'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV37ContLacres',fld:'vCONTLACRES'},{av:'AV36SnInseriu',fld:'vSNINSERIU'},{av:'AV35SnAlterou',fld:'vSNALTEROU'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV13Modo',fld:'vMODO'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'}],[]];
   this.EvtParms["'LACRES'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV26bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV27bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'}],[{av:'AV30SaidaLacresSeq',fld:'vSAIDALACRESSEQ'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV26bmpAlterar',fld:'vBMPALTERAR'},{av:'gx.fn.getCtrlProperty("vBMPALTERAR","Tooltiptext")',ctrl:'vBMPALTERAR',prop:'Tooltiptext'},{av:'AV27bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'},{av:'A6311SaidaLacresSeq',fld:'SAIDALACRESSEQ'}],[{av:'A6311SaidaLacresSeq',fld:'SAIDALACRESSEQ'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV15SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV14SaidaId',fld:'vSAIDAID'},{av:'AV17SaidaVolumeTranspQtde',fld:'vSAIDAVOLUMETRANSPQTDE'},{av:'AV18SaidaVolumeTranspEspecie',fld:'vSAIDAVOLUMETRANSPESPECIE'},{av:'AV19SaidaVolumeTranspMarca',fld:'vSAIDAVOLUMETRANSPMARCA'},{av:'AV20SaidaVolumeTranspNumero',fld:'vSAIDAVOLUMETRANSPNUMERO'},{av:'AV21SaidaVolumeTranspPesoLiq',fld:'vSAIDAVOLUMETRANSPPESOLIQ'},{av:'AV22SaidaVolumeTranspPesoBruto',fld:'vSAIDAVOLUMETRANSPPESOBRUTO'},{av:'A6292SaidaLacresNumero',fld:'SAIDALACRESNUMERO'},{av:'A6311SaidaLacresSeq',fld:'SAIDALACRESSEQ'},{av:'AV16SaidaVolumeTranspSeq',fld:'vSAIDAVOLUMETRANSPSEQ'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV37ContLacres',fld:'vCONTLACRES'},{av:'AV36SnInseriu',fld:'vSNINSERIU'},{av:'AV35SnAlterou',fld:'vSNALTEROU'}]];
   this.EnterCtrl = ["CONFIRMAR"];
   this.setVCMap("AV15SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV16SaidaVolumeTranspSeq", "vSAIDAVOLUMETRANSPSEQ", 0, "int");
   this.setVCMap("AV13Modo", "vMODO", 0, "char");
   this.setVCMap("AV15SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14SaidaId", "vSAIDAID", 0, "int");
   this.setVCMap("AV16SaidaVolumeTranspSeq", "vSAIDAVOLUMETRANSPSEQ", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV15SaidaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV14SaidaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV16SaidaVolumeTranspSeq"});
   GridContainer.addRefreshingVar({rfrVar:"AV26bmpAlterar", rfrProp:"Value", gxAttId:"Bmpalterar"});
   GridContainer.addRefreshingVar({rfrVar:"AV26bmpAlterar", rfrProp:"Tooltiptext", gxAttId:"Bmpalterar"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpExcluir", rfrProp:"Value", gxAttId:"Bmpexcluir"});
   GridContainer.addRefreshingVar({rfrVar:"AV27bmpExcluir", rfrProp:"Tooltiptext", gxAttId:"Bmpexcluir"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new halteravolumelacre());
